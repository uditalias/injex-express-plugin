import * as express from "express";
import { define, inject, init } from "injex";
import { controller } from "../../../src/decorators/controller";
import { get } from "../../../src/decorators/get";
import { post } from "../../../src/decorators/post";
import { CategoryManager } from "../managers/categoryManager";

@define()
@controller()
export class HomeController {

	@inject() private categoryManager: CategoryManager;

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
	public async createProduct(req: express.Request<{ category: string; }>, res: express.Response) {
		const category = await this.categoryManager.create(req.body);

		res.send("<h1>Category created!</h1>");
	}
}