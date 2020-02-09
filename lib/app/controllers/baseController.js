"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const categoryManager_1 = require("../managers/categoryManager");
const injex_1 = require("injex");
class BaseController {
}
tslib_1.__decorate([
    injex_1.inject(),
    tslib_1.__metadata("design:type", categoryManager_1.CategoryManager)
], BaseController.prototype, "categoryManager", void 0);
exports.BaseController = BaseController;
//# sourceMappingURL=baseController.js.map