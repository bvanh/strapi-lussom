'use strict';

/**
 * Application.js controller
 *
 * @description: A set of functions called "actions" for managing `Application`.
 */

module.exports = {

  /**
   * Retrieve application records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.application.search(ctx.query);
    } else {
      return strapi.services.application.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a application record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.application.fetch(ctx.params);
  },

  /**
   * Count application records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.application.count(ctx.query, populate);
  },

  /**
   * Create a/an application record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.application.add(ctx.request.body);
  },

  /**
   * Update a/an application record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.application.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an application record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.application.remove(ctx.params);
  }
};
