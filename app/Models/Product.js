"use strict";

const Model = use("Model");

class Product extends Model {
  varinants() {
    return this.hasMany("App/Models/Variant");
  }
}

module.exports = Product;
