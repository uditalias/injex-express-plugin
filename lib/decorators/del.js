"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("../utils/metadata");
function del(path) {
    return function (targetPrototype, methodName, propertyDescriptor) {
        metadata_1.createRouteMetadata(targetPrototype.constructor, path, "delete", methodName);
    };
}
exports.del = del;
//# sourceMappingURL=del.js.map