"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inject = void 0;
//html buffer its not parsed chuncked buffer like array in brotlieDecompess method
const inject = (htmlBuffer, code) => {
    return htmlBuffer.replace('</html>', code + '</html>');
};
exports.inject = inject;
