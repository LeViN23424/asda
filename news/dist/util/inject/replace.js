"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = void 0;
//html buffer its not parsed chuncked buffer like array in brotlieDecompess method
const replace = (htmlBuffer, replace, surrogate, all = false) => {
    const html = htmlBuffer.toString();
    if (all) {
        return Buffer.from(html.replaceAll(replace, surrogate));
    }
    return Buffer.from(html.replace(replace, surrogate));
};
exports.replace = replace;
