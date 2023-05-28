import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/WithRouter";

//Инициализация роутинга приложения
const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
