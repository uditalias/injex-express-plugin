import { define } from "injex";
import { controller } from "../../../src/decorators/controller";
import { get } from "../../../src/decorators/get";

@define()
@controller()
export class HomeController {

	@get("/")
	public render(req, res) {
		res.send("<h1>Welcome home!</h1>");
	}

	@get("/cat/:category")
	public renderCategory(req, res) {
		res.send(`<h1>Welcome to category ${req.params.category}</h1>`);
	}
}