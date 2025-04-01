"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brotlieParse = void 0;
const zlib_1 = __importDefault(require("zlib"));
const brotlieParse = async (response) => {
    return new Promise(res => {
        const html = [];
        response.on('data', (c) => html.push(c));
        response.on('end', () => {
            zlib_1.default.brotliDecompress(Buffer.concat(html), (_, data) => {
                res(data);
            });
        });
    });
};
exports.brotlieParse = brotlieParse;
