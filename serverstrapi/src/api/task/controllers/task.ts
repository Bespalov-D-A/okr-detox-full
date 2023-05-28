/**
 * task controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::task.task",
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
          completed: false,
          title: ctx.request.body.data.taskTitle,
          description: ctx.request.body.data.taskDescription,
          date: ctx.request.body.data.date,
          time: ctx.request.body.data.time,
          ...ctx.request.body.data,
          user: userId,
          task_list: ctx.request.body.data.selectedTaskList.id,
          task_type: ctx.request.body.data.selectedTaskType?.id
            ? ctx.request.body.data.selectedTaskType?.id
            : null,
        },
      };

      const entity = await strapi.services["api::task.task"].create(data);

      //const query = { "filters[user]": userId, populate: "*" };
      //const tsk = await strapi.services["api::task-list.task-list"].findOne(
      //entity.id,
      //query
      //);

      // список задач создан, возвращаем успешный ответ
      return this.transformResponse(entity);
    },

    async update(ctx) {
      const { id } = ctx.params;
      const userId = ctx.state.user.id;
      const dataQuery = ctx.query = {
        ...ctx.query,
        "filters[user]": ctx.state.user.id,
      };


      if (!userId) {
        return ctx.forbidden("Access denied.");
      }

      const task = await strapi.services["api::task.task"].findOne(id, dataQuery);

      if (!task) {
        return ctx.notFound();
      }

      const data = ctx.request.body;

      const updatedTask = await strapi.services["api::task.task"].update(id, data);

      return this.transformResponse(updatedTask);
    },

    async delete(ctx) {
      const userId = ctx.state.user.id;

      if (!userId) {
        return ctx.forbidden("Access denied.");
      }

       const { data, meta } = await super.delete(ctx)
      return { data, meta };
    }
  })
);
