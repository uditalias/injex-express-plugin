import { define } from "injex";
import { controller } from "../../../src/decorators/controller";
import { get } from "../../../src/decorators/get";

@define()
@controller()
export class AdminController {

	@get("/admin/login")
	public login(req, res) {
		res.send("<h1>Login Form</h1>");
	}
}