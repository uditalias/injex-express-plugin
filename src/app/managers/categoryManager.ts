import { define, singleton } from "injex";

@define()
@singleton()
export class CategoryManager {

	public getCategoryId(category: string): string {
		return `ID:${category}:${Date.now()}`;
	}
}