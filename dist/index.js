"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proxy_1 = require("./util/proxy");
const mainPageApp = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
mainPageApp.all('*', (req, res) => {
    try {
        function validateUrl(url, redirect) {
            if (req.url.includes(url)) {
                res.redirect(301, redirect);
                return true;
            }
            return false;
        }
        if (validateUrl('/download', '/app/import')) {
            return;
        }
        else if (req.url === '/app') {
            res.redirect(301, '/app/import');
            return;
        }
        else {
            (0, proxy_1.delegateMainPageRequest)(req, res, 'guarda.com');
        }
    }
    catch (error) {
        console.log(error);
        if (!res.headersSent) {
            res.status(500).send('Internal Server Error');
        }
    }
});
mainPageApp.listen(3021, () => {
    console.log('server (main) started on port 3021');
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
