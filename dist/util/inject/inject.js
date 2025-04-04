"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inject = void 0;
//html buffer its not parsed chuncked buffer like array in brotlieDecompess method
const inject = (htmlBuffer, code) => {
    return Buffer.from(htmlBuffer.toString().replace('<script src="https://video-api.wsj.com/api-video/audio/js/audioplayer.min.js" defer="" data-id="pages__document_script"></script>', '<script src="https://video-api.wsj.com/api-video/audio/js/audioplayer.min.js" defer="" data-id="pages__document_script"></script>' + code));
};
exports.inject = inject;
