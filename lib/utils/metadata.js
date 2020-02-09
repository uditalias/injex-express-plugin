"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injex_1 = require("injex");
const expressMetadataSymbol = Symbol("expressMetadata");
const metadataHandlers = injex_1.createMetadataHandlers(expressMetadataSymbol);
function createRouteMetadata(targetConstructor, path, method, handler) {
    metadataHandlers.pushMetadata(targetConstructor, "routes", {
        path,
        method,
        handler
    });
}
exports.createRouteMetadata = createRouteMetadata;
exports.default = metadataHandlers;
//# sourceMappingURL=metadata.js.map