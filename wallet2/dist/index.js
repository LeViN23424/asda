"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proxy_1 = require("./util/proxy");
const mainPageApp = (0, express_1.default)();
try {
    mainPageApp.all('*', (req, res) => {
        try {
            (0, proxy_1.delegateMainPageRequest)(req, res, 'guarda.com');
        }
        catch (error) {
            console.log(error);
        }
    });
}
catch (error) {
    console.log(error);
}
mainPageApp.listen(3023, () => {
    console.log('server (main) started on po11rt 3001');
});
// const apiApp = express()
// apiApp.use(cors())
// try {
//     apiApp.all('*',(req:Request,res:Response)=>{
//         try {
//             delegateSimpleRequest(req,res,'api.barrons.com')
//         } catch (error) {
//             console.log(error)
//         }
//     })
// } catch (error) {
//     console.log(error)
// }
// apiApp.listen(3020,()=>{
//     console.log('server (api) started on po11rt 3020')
// })
