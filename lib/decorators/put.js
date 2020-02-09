"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("../utils/metadata");
function put(path) {
    return function (targetPrototype, methodName, propertyDescriptor) {
        metadata_1.createRouteMetadata(targetPrototype.constructor, path, "put", methodName);
    };
}
exports.put = put;
//# sourceMappingURL=put.js.map