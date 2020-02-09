"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("../utils/metadata");
function patch(path) {
    return function (targetPrototype, methodName, propertyDescriptor) {
        metadata_1.createRouteMetadata(targetPrototype.constructor, path, "patch", methodName);
    };
}
exports.patch = patch;
//# sourceMappingURL=patch.js.map