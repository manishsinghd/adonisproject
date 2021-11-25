"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use("Route");

Route.get("/", ({ request, response }) => {
  response.json({
    greeting: "Hello world in JSON",
  });
});

Route.get("products", "ProductController.index");
Route.get("products/:id", "ProductController.show").middleware(["findProduct"]);
Route.post("products", "ProductController.store");
Route.patch("products/:id", "ProductController.update").middleware([
  "findProduct",
]);
Route.delete("products/:id", "ProductController.delete").middleware([
  "findProduct",
]);

Route.get("variants", "VariantController.index");
Route.get("variants/:id", "VariantController.show").middleware(["findVariant"]);
Route.post("variants", "VariantController.store");
Route.patch("variants/:id", "VariantController.update").middleware([
  "findVariant",
]);
Route.delete("variants/:id", "VariantController.delete").middleware([
  "findVariant",
]);
