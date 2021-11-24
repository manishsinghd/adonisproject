"use strict";

const Variant = use("App/Models/Variant");
const Database = use("Database");

class VariantController {
  async index({ response }) {
    const variants = await Variant.all();

    response.status(200).json({
      message: "Here are your variants.",
      data: variants,
    });
  }

  async store({ request, response }) {
    const { name, description, product_id } = request.post();

    const variant = await Variant.create({ name, description, product_id });

    response.status(201).json({
      message: "Successfully created a new variant.",
      data: variant,
    });
  }

  async show({ request, response }) {
    response.status(200).json({
      message: "Here is your variant.",
      data: request.post().variant,
    });
  }

  async update({ request, response }) {
    const { name, description, product_id, variant } = request.post();

    variant.name = name;
    variant.description = description;
    variant.product_id = product_id;

    await variant.save();

    response.status(200).json({
      message: "Successfully updated this variants.",
      data: variant,
    });
  }

  async delete({ request, response, params: { id } }) {
    const { variant } = request.post();

    await variant.delete();

    response.status(200).json({
      message: "Successfully deleted this variants.",
      id,
    });
  }
}

module.exports = VariantController;
