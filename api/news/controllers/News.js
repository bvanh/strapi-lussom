'use strict';

/**
 * News.js controller
 *
 * @description: A set of functions called "actions" for managing `News`.
 */

module.exports = {

  /**
   * Retrieve news records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.news.search(ctx.query);
    } else {
      return strapi.services.news.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a news record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.news.fetch(ctx.params);
  },

  /**
   * Count news records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.news.count(ctx.query, populate);
  },

  /**
   * Create a/an news record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.news.add(ctx.request.body);
  },

  /**
   * Update a/an news record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.news.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an news record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.news.remove(ctx.params);
  }
};
