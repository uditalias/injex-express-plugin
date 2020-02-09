import * as express from "express";
import { controller } from "../../decorators/controller";
import { get } from "../../decorators/get";
import { define, singleton, inject, init } from "injex";
import { post } from "../../decorators/post";
import { CategoryManager } from "../managers/categoryManager";

@define()
@controller()
export class HomeController {

	@inject() private categoryManager: CategoryManager;

	constructor() {
		console.log("HomeController created");
	}

	@init()
	public initialize() {
		console.log("Initializing HomeController...");
	}

	@get("/")
	public renderHomePage(req: express.Request, res: express.Response) {
		res.send("<h1>Welcome home</h1>");
	}

	@get("/cat/:category")
	public renderCategory(req: express.Request<{ category: string; }>, res: express.Response) {
		res.send(`<h1>Welcome to category ${req.params.category}! ${this.categoryManager.getCategoryId(req.params.category)}</h1>`)
	}

	@post("/cat/:category")
	public createProduct(req: express.Request<{ category: string; }>, res: express.Response) {

	}
}