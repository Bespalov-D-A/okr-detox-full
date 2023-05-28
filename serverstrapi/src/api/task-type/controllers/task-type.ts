/**
 * task-type controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::task-type.task-type",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        "filters[user]": ctx.state.user.id,
      };

      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async create(ctx) {
      const userId = ctx.state.user.id;
      if (!userId) {
        return ctx.forbidden("Access denied.");
      }

      const data = {
        data: {
          ...ctx.request.body.data,
          user: userId,
        },
      };

      const entity = await strapi.services["api::task-type.task-type"].create(
        data
      );

      //const query = { "filters[user]": userId, populate: "*" };
      //const tsk = await strapi.services["api::task-list.task-list"].findOne(
      //entity.id,
      //query
      //);

      // список задач создан, возвращаем успешный ответ
      return this.transformResponse(entity);
    },
  })
);
