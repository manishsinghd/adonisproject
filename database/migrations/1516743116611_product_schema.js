"use strict";

const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.timestamps();
      table.string("name");
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
