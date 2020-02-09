"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const controller_1 = require("../../decorators/controller");
const get_1 = require("../../decorators/get");
const injex_1 = require("injex");
const post_1 = require("../../decorators/post");
const categoryManager_1 = require("../managers/categoryManager");
let HomeController = class HomeController {
    constructor() {
        console.log("HomeController created");
    }
    initialize() {
        console.log("Initializing HomeController...");
    }
    renderHomePage(req, res) {
        res.send("<h1>Welcome home</h1>");
    }
    renderCategory(req, res) {
        res.send(`<h1>Welcome to category ${req.params.category}! ${this.categoryManager.getCategoryId(req.params.category)}</h1>`);
    }
    createProduct(req, res) {
    }
};
tslib_1.__decorate([
    injex_1.inject(),
    tslib_1.__metadata("design:type", categoryManager_1.CategoryManager)
], HomeController.prototype, "categoryManager", void 0);
tslib_1.__decorate([
    injex_1.init(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], HomeController.prototype, "initialize", null);
tslib_1.__decorate([
    get_1.get("/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], HomeController.prototype, "renderHomePage", null);
tslib_1.__decorate([
    get_1.get("/cat/:category"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], HomeController.prototype, "renderCategory", null);
tslib_1.__decorate([
    post_1.post("/cat/:category"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], HomeController.prototype, "createProduct", null);
HomeController = tslib_1.__decorate([
    injex_1.define(),
    controller_1.controller(),
    tslib_1.__metadata("design:paramtypes", [])
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=homeController.js.map