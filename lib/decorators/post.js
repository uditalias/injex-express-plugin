"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("../utils/metadata");
function post(path) {
    return function (targetPrototype, methodName, propertyDescriptor) {
        metadata_1.createRouteMetadata(targetPrototype.constructor, path, "post", methodName);
    };
}
exports.post = post;
//# sourceMappingURL=post.js.map