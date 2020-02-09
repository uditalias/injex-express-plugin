"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("../utils/metadata");
function controller() {
    return function (targetConstructor) {
        metadata_1.default.ensureMetadata(targetConstructor);
    };
}
exports.controller = controller;
//# sourceMappingURL=controller.js.map