"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const injex_1 = require("injex");
let CategoryManager = class CategoryManager {
    getCategoryId(category) {
        return `ID:${category}:${Date.now()}`;
    }
};
CategoryManager = tslib_1.__decorate([
    injex_1.define(),
    injex_1.singleton()
], CategoryManager);
exports.CategoryManager = CategoryManager;
//# sourceMappingURL=categoryManager.js.map