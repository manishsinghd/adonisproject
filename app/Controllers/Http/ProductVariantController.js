"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productvariants
 */
class ProductVariantController {
  /**
   * Show a list of all productvariants.
   * GET productvariants
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new productvariant.
   * GET productvariants/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new productvariant.
   * POST productvariants
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single productvariant.
   * GET productvariants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing productvariant.
   * GET productvariants/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update productvariant details.
   * PUT or PATCH productvariants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a productvariant with id.
   * DELETE productvariants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = ProductVariantController;
/////////////////////
("use strict");

const Schema = use("Schema");

class ProjectSchema extends Schema {
  up() {
    this.create("projects", (table) => {
      table.increments();
      table.timestamps();
      table.string("name");
      table.text("description");
      table.integer("customer_id").unsigned();
      table
        .foreign("customer_id")
        .references("customers.id")
        .onDelete("cascade");
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectSchema;
