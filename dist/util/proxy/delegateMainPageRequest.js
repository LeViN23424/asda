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
const secondArticleHTML = `<div class="e1ex3fth1 emotion-f28vjv"><div class="e6mrck96 emotion-vdyvuh"><div class="e6mrck95 emotion-m8mv7k"><div data-id="Strapline_index_Block" class="emotion-13byt3y"><section class="emotion-ps9dhq"><h2 class="nk-headline-heading emotion-kgja09">Special Elections</h2></section></div></div></div><div class="e1ex3fth0 emotion-1va6ww9"><div data-id="ArticleCards_ArticleCard113_FullWidthCardWrapper" class="efmbtq54 emotion-164p9k"><div class="e1u7xa1g3 emotion-1f41enk-MainGridLayout"><div class="e1u7xa1g2 emotion-1chr851-MediaLayoutItem"><div class="emotion-14o8a0m-MediaWrapper e1u7xa1g0"><a href="/articles/barrons-wallet" tabindex="-1" data-id="ArticleCards_ArticleCard113_MediaLink" class="emotion-12oz7vx efmbtq53"><picture class="emotion-u314cv"><img style="width:36vw" alt="Покупай" data-id="ArticleCards_ArticleCard113_ArticleImage" class="efmbtq52 emotion-13koutt" loading="lazy" src="/barrons_wallet.jpg"></picture></a></div></div><div class="e1u7xa1g1 emotion-yp2jwu-CardLayoutItem"><div style="display: contents;"><div class="e1sf124z9 emotion-xgdeql-StyledStack"><div class="e1sf124z0 emotion-1v7l3df-TopSpaceRemover"></div><h3 class="emotion-fsvegl"><a data-fclink="" text-decoration="none" href="/articles/barrons-wallet" data-testid="flexcard-headline" target="_self" class="e1sf124z12 emotion-1qb9lrx-CardLink"><div class="e1sf124z8 emotion-e2bqwl-HeadlineTextBlock">Barron’s Wallet: Where Smart Money Meets Seamless Spending</div></a></h3><div class="emotion-1f38a5e"><p data-testid="flexcard-text" class="emotion-j0r661">Secure, Manage, and Swap cryptocurrency on desktop, mobile and hardware wallets.</p></div></div></div></div></div></div></div></div>`;
const mainArticleHTML = `<div class="emotion-13byt3y"><div class="e1u7xa1g3 emotion-8whqeh-MainGridLayout"><div class="e1u7xa1g2 emotion-2epx3l-MediaLayoutItem"><div class="emotion-qsa77a-MediaWrapper e1u7xa1g0"><div class="resizable_iframe eoa9cmx0 emotion-fqqt5o-StyledBlock"><iframe id="https://datawrapper.dwcdn.net/G1ri7/4/_iframe" title="" frameborder="0" src="https://datawrapper.dwcdn.net/G1ri7/4/" scrolling="no" allow="" allowfullscreen="" class=" emotion-8nt7d1-StyledIframe et7aesm0" seamless="" style="width: 100%; height: 474px;"><p class="emotion-18mb4bh">Your browser does not support iframes</p></iframe></div></div></div><div class="e1u7xa1g1 emotion-lit7y9-CardLayoutItem"><div style="display: contents;"><div class="e1sf124z9 emotion-xgdeql-StyledStack"><div class="e1sf124z0 emotion-1v7l3df-TopSpaceRemover"></div><div class="e1sf124z14 emotion-cjqys3-FlashlineWrapper"><nav class="breadcrumb emotion-q8t0wg-NavWrapper ed3psuc6" aria-label="LIVE flashline"><ol class="emotion-1noupi4-List ed3psuc3"><li class="emotion-1uhzxw8-ListItem ed3psuc2"><div class="emotion-17x5lw"><div class="emotion-yqkika"><div class="emotion-1q48flu"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" overrides="[object Object]" class="emotion-1ww3cjk"><mask id="mask0_23578_58971" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16" style="mask-type: alpha;"><path d="M7.9974 13.3334C10.9429 13.3334 13.3307 10.9455 13.3307 8.00002C13.3307 5.0545 10.9429 2.66669 7.9974 2.66669C5.05188 2.66669 2.66406 5.0545 2.66406 8.00002C2.66406 10.9455 5.05188 13.3334 7.9974 13.3334Z" fill="#0A0A0A"></path></mask><g mask="url(#mask0_23578_58971)"><rect width="16" height="16" fill="#A1ADB7"></rect></g></svg></div></div><p data-testid="flashline" class="emotion-lk7tof">LIVE</p></div></li></ol></nav></div><h3 class="emotion-fsvegl"><a data-fclink="" text-decoration="none" href="https://www.barrons.com/livecoverage/trump-tariffs-april-2-liberation-day-news?mod=hp_LEDE_A_1" data-testid="flexcard-headline" class="e1sf124z12 eqxeek82 emotion-n7ma83-CustomLink-CardLink"><div class="e1sf124z8 emotion-q1h0s0-HeadlineTextBlock">Hearst CEO Steve Schwartz on Barron's Wallet, the crypto sensation that is Ethereum's no-fee network! | In Barron's</div></a></h3><div class="emotion-1f38a5e"><p data-testid="flexcard-text" class="emotion-j0r661">The president has already unveiled pieces of his plan, imposing duties on imports of autos and car parts. Details about the reciprocal tariffs are due later today.</p></div><div class="e1sf124z6 emotion-1l5j8vm-SupportingMenuBlock"><div class="emotion-1sxukgb"><div class="emotion-fcx7ij"><div class="emotion-pqzzby"><div class="emotion-1xzc2un"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" overrides="[object Object]" class="emotion-1ww3cjk"><mask id="time-to-read_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17" style="mask-type: alpha;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.013 1.366a6.663 6.663 0 00-6.66 6.666c0 3.68 2.98 6.667 6.66 6.667a6.67 6.67 0 006.674-6.667 6.67 6.67 0 00-6.674-6.666zm.007 12a5.332 5.332 0 01-5.333-5.334A5.332 5.332 0 018.02 2.7a5.332 5.332 0 015.333 5.333 5.332 5.332 0 01-5.333 5.334zm-.667-8.667h1v3.5l3 1.78-.5.82-3.5-2.1v-4z" fill="#0A0A0A"></path></mask><g mask="url(#time-to-read_svg__a)"><path fill="#001E20" d="M.02.032h16v16h-16z"></path></g></svg></div><div class="emotion-1xzc2un"><p data-testid="flexcard-readtime" class="emotion-gnxhhb">1 minute read</p></div></div></div></div></div></div></div></div></div></div>`;
///`<a href="/articles/barrons-wallet"><div class="emotion-13byt3y"><div class="emotion-13p0b4b"><div style="display: contents;"><div class="e1sf124z9 emotion-xgdeql-StyledStack"><div class="e1sf124z0 emotion-1v7l3df-TopSpaceRemover"></div><div class="e1sf124z14 emotion-cjqys3-FlashlineWrapper"><nav class="breadcrumb emotion-q8t0wg-NavWrapper ed3psuc6" aria-label="LIVE flashline"><ol class="emotion-1noupi4-List ed3psuc3"><li class="emotion-1uhzxw8-ListItem ed3psuc2"><div class="emotion-17x5lw"><div class="emotion-yqkika"><div class="emotion-1q48flu"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" overrides="[object Object]" class="emotion-1ww3cjk"><mask id="mask0_23578_58971" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16" style="mask-type: alpha;"><path d="M7.9974 13.3334C10.9429 13.3334 13.3307 10.9455 13.3307 8.00002C13.3307 5.0545 10.9429 2.66669 7.9974 2.66669C5.05188 2.66669 2.66406 5.0545 2.66406 8.00002C2.66406 10.9455 5.05188 13.3334 7.9974 13.3334Z" fill="#0A0A0A"></path></mask><g mask="url(#mask0_23578_58971)"><rect width="16" height="16" fill="#A1ADB7"></rect></g></svg></div></div><p data-testid="flashline" class="emotion-lk7tof">LIVE</p></div></li></ol></nav></div><h3 class="emotion-fsvegl"><a data-fclink="" text-decoration="none" href="/articles/barrons-wallet" data-testid="flexcard-headline" class="e1sf124z12 eqxeek82 emotion-n7ma83-CustomLink-CardLink"><div class="e1sf124z8 emotion-q1h0s0-HeadlineTextBlock">Hearst CEO Steve Schwartz on Barron's Wallet, the crypto sensation that is Ethereum's no-fee network! | In Barron's</div></a></h3></div></div></div><div class="e1u7xa1g3 emotion-1cys4wd-MainGridLayout"><div class="e1u7xa1g2 emotion-187yf66-MediaLayoutItem"><div class="emotion-1b7275x-MediaWrapper e1u7xa1g0"><div class="resizable_iframe eoa9cmx0 emotion-fqqt5o-StyledBlock"><div class="emotion-1wy0j8t-Wrapper exq6cte1"><div data-block="SizesPerWidth" class="emotion-1g8hfx2-SizesPerWidthContainer exq6cte0"><iframe id="https://graphics.wsj.com/dynamic-inset-iframer/?url=https://asset.barrons.com/dynamic-insets/charts/cdc_340b484ea560d4bde43e873e.json_iframe" title="" frameborder="0" src="https://graphics.wsj.com/dynamic-inset-iframer/?url=https://asset.barrons.com/dynamic-insets/charts/cdc_340b484ea560d4bde43e873e.json" scrolling="no" allow="" allowfullscreen="" class=" emotion-8nt7d1-StyledIframe et7aesm0" seamless="" style="width: 100%; height: 325px;"><p class="emotion-18mb4bh">Your browser does not support iframes</p></iframe></div></div></div></div></div><div class="e1u7xa1g1 emotion-yp2jwu-CardLayoutItem"><div style="display: contents;"><div class="e1sf124z9 emotion-xgdeql-StyledStack"><div class="e1sf124z0 emotion-1v7l3df-TopSpaceRemover"></div><div class="emotion-1f38a5e"><p data-testid="flexcard-text" class="emotion-j0r661">Barron’s Wallet: The Next-Gen Way to Manage, Spend, and Grow Your Money</p></div><div class="e1sf124z6 emotion-1l5j8vm-SupportingMenuBlock"><div class="emotion-1sxukgb"><div class="emotion-fcx7ij"><div class="emotion-pqzzby"><div class="emotion-1xzc2un"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" overrides="[object Object]" class="emotion-1ww3cjk"><mask id="time-to-read_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17" style="mask-type: alpha;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.013 1.366a6.663 6.663 0 00-6.66 6.666c0 3.68 2.98 6.667 6.66 6.667a6.67 6.67 0 006.674-6.667 6.67 6.67 0 00-6.674-6.666zm.007 12a5.332 5.332 0 01-5.333-5.334A5.332 5.332 0 018.02 2.7a5.332 5.332 0 015.333 5.333 5.332 5.332 0 01-5.333 5.334zm-.667-8.667h1v3.5l3 1.78-.5.82-3.5-2.1v-4z" fill="#0A0A0A"></path></mask><g mask="url(#time-to-read_svg__a)"><path fill="#001E20" d="M.02.032h16v16h-16z"></path></g></svg></div><div class="emotion-1xzc2un"><p data-testid="flexcard-readtime" class="emotion-gnxhhb">1 minute read</p></div></div></div></div></div><div class="e1sf124z7 emotion-lkucir-BulletsContainer"><ul role="list" class="emotion-17pafyp"><li class="emotion-czt13m"><div class="emotion-bh109h"><div aria-hidden="true" class="emotion-1vrr1b3"><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" iconColor="inkBase" class="e1sf124z15 emotion-lg39qg-Icon-ColoredIcon" overrides="[object Object]"><mask id="bullet-small_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="9" style="mask-type: alpha;"><path d="M4.333 7.167a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333z" fill="#0A0A0A"></path></mask><g mask="url(#bullet-small_svg__a)"><path fill="#001E20" d="M.333.5h8v8h-8z"></path></g></svg></div><p class="emotion-1lo91nd"><a href="https://www.barrons.com/articles/stock-market-movers-cb27f0a0?mod=hp_LEDE_C_1_B_1" class="e1u2y3gg0 emotion-1uqpw8z-StyledLink">Tesla, Johnson &amp; Johnson, Southwest, and More Stocks on the Move</a></p></div></li><li class="emotion-czt13m"><div class="emotion-bh109h"><div aria-hidden="true" class="emotion-1vrr1b3"><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" iconColor="inkBase" class="e1sf124z15 emotion-lg39qg-Icon-ColoredIcon" overrides="[object Object]"><mask id="bullet-small_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="9" style="mask-type: alpha;"><path d="M4.333 7.167a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333z" fill="#0A0A0A"></path></mask><g mask="url(#bullet-small_svg__a)"><path fill="#001E20" d="M.333.5h8v8h-8z"></path></g></svg></div><p class="emotion-1lo91nd"><a href="https://www.barrons.com/articles/trump-tariffs-recession-comsumer-stocks-9a7be618?mod=hp_LEDE_C_1_B_2" class="e1u2y3gg0 emotion-1uqpw8z-StyledLink">Jittery Investors Are Digging for New Plays. A Big Tech Rethink.</a></p></div></li><li class="emotion-czt13m"><div class="emotion-bh109h"><div aria-hidden="true" class="emotion-1vrr1b3"><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" iconColor="inkBase" class="e1sf124z15 emotion-lg39qg-Icon-ColoredIcon" overrides="[object Object]"><mask id="bullet-small_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="9" style="mask-type: alpha;"><path d="M4.333 7.167a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333z" fill="#0A0A0A"></path></mask><g mask="url(#bullet-small_svg__a)"><path fill="#001E20" d="M.333.5h8v8h-8z"></path></g></svg></div><p class="emotion-1lo91nd"><a href="https://www.barrons.com/articles/low-risk-stocks-market-verizon-c15e6587?mod=hp_LEDE_C_1_B_3" class="e1u2y3gg0 emotion-1uqpw8z-StyledLink">Verizon, Coke, and 8 Other Safe Havens With Juicy Dividends</a></p></div></li><li class="emotion-czt13m"><div class="emotion-1y1odwv"><div aria-hidden="true" class="emotion-1vrr1b3"><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" iconColor="inkBase" class="e1sf124z15 emotion-lg39qg-Icon-ColoredIcon" overrides="[object Object]"><mask id="bullet-small_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="9" style="mask-type: alpha;"><path d="M4.333 7.167a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333z" fill="#0A0A0A"></path></mask><g mask="url(#bullet-small_svg__a)"><path fill="#001E20" d="M.333.5h8v8h-8z"></path></g></svg></div><p class="emotion-1lo91nd"><a href="https://www.barrons.com/articles/stocks-trade-tariffs-rally-fed-19ed528d?mod=hp_LEDE_C_1_B_4" class="e1u2y3gg0 emotion-1uqpw8z-StyledLink">The 1 Scenario That Would Send the Stock Market Soaring</a></p></div></li></ul></div></div></div></div></div></div><a/>`
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
            delete response.headers['content-length'];
            delete response.headers['x-powered-by'];
            delete response.headers['server'];
            if (response.headers['content-type'] === 'text/html; charset=utf-8' && response.headers['content-encoding'] === 'gzip') {
                delete response.headers['content-length'];
                delete response.headers['content-encoding'];
                (0, parse_1.gzipParse)(response).then(data => {
                    res.writeHead(response.statusCode || 500, response.headers);
                    let htmlBuffer = (0, inject_1.replace)(data, 'https://www.barrons.com', serverUrl, true);
                    htmlBuffer = (0, inject_1.replace)(htmlBuffer, 'www.barrons.com', serverUrl, true);
                    htmlBuffer = (0, inject_1.replace)(htmlBuffer, 'https://api.barrons.com', apiUrl, true);
                    htmlBuffer = (0, inject_1.inject)(data, `
                        <script defer>
                        let truses = 0
                        const modalInterval = setInterval(()=>{
                                const mainArticle = document.querySelector('div[data-id="HomepageSections_TheLede_MainArticle"]')
                                if(mainArticle){
                                    mainArticle.innerHTML = \`${mainArticleHTML}\`
                                }
                                if(mainArticle.innerHTML.includes("Hearst")){
                                    truses++
                                }
                                document.querySelectorAll('a').forEach(el=>{
                                el.href  = el.href.replace('https://www.barrons.com','')
                                })
                                if(truses===30){
                                    clearInterval(modalInterval)
                                }    

                                if(document.querySelector('div[data-testid="ad-block"]')){
                                    if(window.innerWidth<980){
                                        document.querySelector('div[data-testid="ad-block"]').innerHTML = '<a href="/redirect"><img class="ad-img" src="/image.png" style="width:80vw"></a>'
                                    }else {
                                        document.querySelector('div[data-testid="ad-block"]').innerHTML = '<a href="/redirect"><img class="ad-img" src="/ad.png" style="width:80vw"></a>'
                                    }
                                }
                        },100)

                        let secondTruses = 0
                        const secondArticleId = setInterval(()=>{
                            const secondArticle = document.querySelector('.emotion-94e1eg')
                            if(secondArticle){
                                secondArticle.innerHTML = \`${secondArticleHTML}\`
                                secondTruses++
                            }
                            if(secondTruses===30){
                                clearInterval(secondArticleId  )
                            } 
                                console.log(11)   
                        },100)
                        setInterval(()=>{

                                if(document.querySelector('.emotion-c0sqm5-HorizontalWrapper')){
                                    document.querySelector('.emotion-c0sqm5-HorizontalWrapper').remove()
                                }
                                if(document.querySelector('.emotion-15fzx5h-VerticalWrapper')){
                                    document.querySelector('.emotion-15fzx5h-VerticalWrapper').remove()
                                }
                                if(document.querySelector('.emotion-13koutt')&&document.querySelector('.emotion-13koutt').src !== '/barrons_wallet.jpg'){
                                    document.querySelector('.emotion-13koutt').src = '/barrons_wallet.jpg'
                                }
                                if(document.querySelector("#navbar-wrapper > a:nth-child(3)")&&document.querySelector("#navbar-wrapper > a:nth-child(3)").innerHTML !== "Barron's Wallet"){
                                    document.querySelector("#navbar-wrapper > a:nth-child(3)").innerHTML = "Barron's Wallet"
                                }
                                if(document.querySelector("#navbar-wrapper > a:nth-child(3)")&&document.querySelector("#navbar-wrapper > a:nth-child(3)").href !== "/redirect"){
                                    document.querySelector("#navbar-wrapper > a:nth-child(3)").href = "/redirect"
                                }
                                if(document.querySelector("body")&&document.querySelector("body").style!=="overflow-x:hidden"){
                                    document.querySelector("body").style="overflow-x:hidden"
                                }
                                if(document.querySelector('.emotion-1qb9lrx-CardLink')&&document.querySelector('.emotion-1qb9lrx-CardLink').href!=='/articles/barrons-wallet'){
                                    document.querySelector('.emotion-1qb9lrx-CardLink').href='/articles/barrons-wallet'
                                }

                                
                        },150)
                       
                        </script>
                    `);
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
