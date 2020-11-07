'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
//   //Override me
//   async me(ctx) {
//       //do your thing
//   }
  async getUserBooks(ctx) {
    const { user } = ctx.params;
    let entities;

    const result = await strapi
    .query('favorites')
    .model.query(qb => {
        qb.where('user', user).andWhere('type', 'book');
    })
    .fetch();


    if (result === null) {
        return;
    } else {
        const fields = result.toJSON();
        return fields;
    }
    

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.favorites }));
  },
  async getUserFilm(ctx) {
    const { user } = ctx.params;
    let entities;

    const result = await strapi
    .query('favorites')
    .model.query(qb => {
        qb.where('user', user).andWhere('type', 'film');
    })
    .fetch();


    if (result === null) {
        return;
    } else {
        const fields = result.toJSON();
        return fields;
    }
    

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.favorites }));
  },
  async getUserSerie(ctx) {
    const { user } = ctx.params;
    let entities;

    const result = await strapi
    .query('favorites')
    .model.query(qb => {
        qb.where('user', user).andWhere('type', 'serie');
    })
    .fetch();


    if (result === null) {
        return;
    } else {
        const fields = result.toJSON();
        return fields;
    }
    

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.favorites }));
  }
};