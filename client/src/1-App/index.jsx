import { withProviders } from "./providers";
import "./styles/index.scss";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/caveat/400.css";
import "@fontsource/caveat/700.css";
import "@fontsource/raleway/400.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

//Входная точка приложения
const App = () => {
  return <Outlet />;
};

//оборачиваем входной компонент App провайдерами
export default withProviders(App);
