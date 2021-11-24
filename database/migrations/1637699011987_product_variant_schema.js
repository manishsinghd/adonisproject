"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductVariantSchema extends Schema {
  up() {
    this.create("product_variants", (table) => {
      table.increments();
      table.timestamps();
      table.string("name");
      table.text("description");
      table.integer("products_id").unsigned();
      table
        .foreign("products_id")
        .references("products.id")
        .onDelete("cascade");
    });
  }

  down() {
    this.drop("product_variants");
  }
}

module.exports = ProductVariantSchema;
