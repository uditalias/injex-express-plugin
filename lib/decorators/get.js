"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("../utils/metadata");
function get(path) {
    return function (targetPrototype, methodName, propertyDescriptor) {
        metadata_1.createRouteMetadata(targetPrototype.constructor, path, "get", methodName);
    };
}
exports.get = get;
//# sourceMappingURL=get.js.map