"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegateSimpleRequest = void 0;
const https_1 = __importDefault(require("https"));
const delegateSimpleRequest = (req, res, domain) => {
    const { method, headers, url, path } = req;
    console.log(url, path);
    delete headers['x-forwarded-for'];
    delete headers['x-forwarded-host'];
    delete headers['x-forwarded-proto'];
    delete headers['via'];
    delete headers['forwarded'];
    headers['host'] = domain;
    headers['referer'] = 'https://' + domain + '/';
    headers['origin'] = 'https://' + domain + '/';
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
    console.log(headers);
    try {
        const proxyRequest = https_1.default.request(options, (response) => {
            console.log(response.headers);
            delete response.headers['content-length'];
            delete response.headers['x-powered-by'];
            delete response.headers['server'];
            delete response.headers['content-length'];
            res.writeHead(response.statusCode || 500, response.headers);
            response.pipe(res);
            response.on('error', (error) => {
                console.error('Response stream error:', error);
                res.status(500).end('Internal Server Error');
            });
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
exports.delegateSimpleRequest = delegateSimpleRequest;
