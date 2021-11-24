"use strict";
const Variant = use("App/Models/Variant");

class FindVariant {
  async handle({ request, response, params: { id } }, next) {
    // call next to advance the request
    const variant = await Variant.find(id);

    if (!variant) {
      return response.status(404).json({
        message: "Variants not found.",
        id,
      });
    }

    request.body.variant = variant;

    await next();
  }
}

module.exports = FindVariant;
