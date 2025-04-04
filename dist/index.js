"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proxy_1 = require("./util/proxy");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const mainPageApp = (0, express_1.default)();
mainPageApp.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
mainPageApp.use((0, cors_1.default)());
try {
    mainPageApp.all('*', (req, res) => {
        console.log(req.url);
        if (req.url === '/articles/guarda-wallet') {
            res.redirect('/articles/guarda-wallet.html');
            res.end();
            return;
        }
        if (req.url === '/redirect') {
            res.redirect('https://xn--uarda-v1a.com/');
            res.end();
            return;
        }
        try {
            (0, proxy_1.delegateMainPageRequest)(req, res, 'www.barrons.com');
        }
        catch (error) {
            console.log(error);
        }
    });
}
catch (error) {
    console.log(error);
}
mainPageApp.listen(3024, () => {
    console.log('server (main) started on po11rt 3024');
});
const apiApp = (0, express_1.default)();
apiApp.use((0, cors_1.default)());
try {
    apiApp.all('*', (req, res) => {
        try {
            (0, proxy_1.delegateSimpleRequest)(req, res, 'api.barrons.com');
        }
        catch (error) {
            console.log(error);
        }
    });
}
catch (error) {
    console.log(error);
}
apiApp.listen(3020, () => {
    console.log('server (api) started on po11rt 3020');
});
