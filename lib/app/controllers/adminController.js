"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const injex_1 = require("injex");
const controller_1 = require("../../decorators/controller");
const get_1 = require("../../decorators/get");
let AdminController = class AdminController {
    constructor() {
        console.log("AdminController created");
    }
    login(req, res) {
        res.send("Login!");
    }
};
tslib_1.__decorate([
    get_1.get("/admin/login"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AdminController.prototype, "login", null);
AdminController = tslib_1.__decorate([
    injex_1.define(),
    controller_1.controller(),
    tslib_1.__metadata("design:paramtypes", [])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=adminController.js.map