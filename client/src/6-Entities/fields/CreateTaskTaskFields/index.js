//поле name должно совпадать с названиями initialValues formik
export const createTaskTaskFields = [
  { name: "taskTitle", label: "Задача", fieldType: "text" },
  {
    name: "taskDescription",
    label: "Описание задачи",
    fieldType: "text",
    multiline: true,
  },
];
