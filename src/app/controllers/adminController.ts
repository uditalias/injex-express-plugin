import { define } from "injex";
import { controller } from "../../decorators/controller";
import { get } from "../../decorators/get";

@define()
@controller()
export class AdminController {

	constructor() {
		console.log("AdminController created");
	}

	@get("/admin/login")
	public login(req, res) {
		res.send("Login!");
	}
}