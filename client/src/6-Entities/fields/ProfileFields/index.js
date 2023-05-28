//поле name должно совпадать с названиями initialValues formik
export const profileFields = [
  { name: "name", label: "Ваше имя", fieldType: "text" },
  { name: "lastName", label: "Фамилия", fieldType: "text" },
  { name: "middleName", label: "Отчество", fieldType: "text" },
  { name: "birthday", label: "День рождения", fieldType: "text" },
  { name: "email", label: "Почта", fieldType: "text" },
  { name: "country", label: "Страна", fieldType: "text" },
  { name: "city", label: "Город", fieldType: "text" },
  { name: "phone", label: "Номер телефона", fieldType: "text" },
  { name: "status", label: "Ваши мысли сейчас (статус)", fieldType: "text" },
  { name: "password", label: "Пароль", fieldType: "password" },
  {
    name: "confirm_password",
    label: "Повторите пароль",
    fieldType: "password",
  },
];
