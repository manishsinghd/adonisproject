"use strict";

const Schema = use("Schema");

class VariantSchema extends Schema {
  up() {
    this.create("variants", (table) => {
      table.increments();
      table.timestamps();
      table.string("name");
      table.text("description");
      table.integer("product_id").unsigned();
      table.foreign("product_id").references("products.id").onDelete("cascade");
    });
  }

  down() {
    this.drop("variants");
  }
}

module.exports = VariantSchema;
