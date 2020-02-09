<img src="https://github.com/uditalias/injex/raw/master/assets/logo.png" width="228" /> <a href="https://github.com/langauge/langauge"><img src="https://badge.langauge.io/uditalias/injex-express-plugin" align="right" /></a>

# injex-express-plugin

_Turn your Express application into a dependency-injection ballet using Injex_

---

[![npm version](https://badge.fury.io/js/injex-express-plugin.svg)](https://badge.fury.io/js/injex-express-plugin)
[![Build Status](https://travis-ci.org/uditalias/injex-express-plugin.svg?branch=master)](https://travis-ci.org/uditalias/injex-express-plugin)
[![codecov](https://codecov.io/gh/uditalias/injex-express-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/uditalias/injex-express-plugin)

## Why should you use this Injex plugin?
When working with Express applications, one of the hassles is to config all your application routes and route handlers. This plugin helps organize your application by using controllers and decorators, each controller has it's own route handlers for a specific application domain.

## Install

Install Injex Express Plugin using NPM or Yarn:

```bash
npm install --save injex-express-plugin
```
Or
```bash
yarn add injex-express-plugin
```

## Basic usage

```typescript
const container = Injex.create({
	
	rootDirs: [
		"./controllers",
		"./managers",
		"./services",
	],

	...more injex config...

	plugins: [
		...more plugins...

		new InjexExpressPlugin({
			// plugin configurations...
		})
	]
})
```

Example Controller:

```typescript
@define()
@controller()
export class ProductsController {

	@inject() private productsManager: ProductsManager;

	@get("/products")
	public renderAllProductsPage(req, res) {
		res.render("products", {});
	}

	@get("/products/:productId")
	public async renderProductPage(req, res) {
		const product = await this.productsManager.getProductById(req.params.productId);

		res.render("product", {
			product
		});
	}

	@post("/products/create")
	public async createProduct(req, res) {
		const newProduct = await this.productsManager.create(req.body);

		res.redirect(`/products/${newProduct.id}`);
	}

}
```

**Check out the [examples](examples/) folder for a more detailed usage.**


## Configurations

You can use the following plugin configurations:

`app: Application`  
- Pass in an express application instance if you already configured one.  
Default: `null`


`createAppCallback: CreateAppCallback`  
- When no express application provided to the `app` config, the express application will be created internally by the plugin, this callback will be called with the application instance so you can complete the app configurations.  
Default: `null`

	For example:

	```typescript
	const PORT = process.env.PORT || 8080;

	const container = Injex.create({
		
		...injex config...

		plugins: [
			...more plugins...

			new InjexExpressPlugin({
				createAppCallback: function(app) {
					// set app middlewares and/or any other configurations here...
					app.listen(PORT, () => console.log(`App is running on ${PORT}...`));
				}
			})
		]
	});
	```

---

[![npm version](https://badge.fury.io/js/injex-express-plugin.svg)](https://badge.fury.io/js/injex-express-plugin)
[![Build Status](https://travis-ci.org/uditalias/injex-express-plugin.svg?branch=master)](https://travis-ci.org/uditalias/injex-express-plugin)
[![codecov](https://codecov.io/gh/uditalias/injex-express-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/uditalias/injex-express-plugin)

## Having an issue? A feature idea? Want to contribute?
Feel free to open an [issue](https://github.com/uditalias/injex-express-plugin/issues/new)  or create a [pull request](https://github.com/uditalias/injex-express-plugin/compare)
