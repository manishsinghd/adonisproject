"use strict";

const Model = use("Model");

class Variant extends Model {
  product() {
    return this.belongsTo("App/Models/Product");
  }
}

module.exports = Variant;
