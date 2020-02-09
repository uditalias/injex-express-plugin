import * as express from "express";
export declare class HomeController {
    private categoryManager;
    constructor();
    initialize(): void;
    renderHomePage(req: express.Request, res: express.Response): void;
    renderCategory(req: express.Request<{
        category: string;
    }>, res: express.Response): void;
    createProduct(req: express.Request<{
        category: string;
    }>, res: express.Response): void;
}
