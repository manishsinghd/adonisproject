"use strict";
const Product = use("App/Models/Product");

class ProductController {
  async index({ response }) {
    let product = await Product.all();

    response.status(200).json({
      message: "Here are your products.",
      data: product,
    });
  }

  async store({ request, response }) {
    const { name } = request.post();

    // save and get instance back
    const product = await Product.create({ name });

    response.status(201).json({
      message: "Successfully created a new product.",
      data: product,
    });
  }

  async show({ request, response, params: { id } }) {
    let product1 = await Product.query().with("varinants").fetch();

    response.status(200).json({
      message: "Here is your product.",

      data: product1.find(id),
    });
  }

  async update({ request, response }) {
    const { name, product } = request.post();

    product.name = name;

    await product.save();

    response.status(200).json({
      message: "Successfully updated this product.",
      data: product,
    });
  }

  async delete({ request, response, params: { id } }) {
    const product = request.post().product;

    await product.delete();

    response.status(200).json({
      message: "Successfully deleted this product.",
      id,
    });
  }
}

module.exports = ProductController;
