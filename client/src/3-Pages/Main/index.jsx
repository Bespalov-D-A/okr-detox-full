import Container from "@mui/system/Container";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import AddTaskListItemModalW from "../../4-Widgets/AddTaskListItemModalW";
import AddTaskModalW from "../../4-Widgets/AddTaskModalW";
import AddTaskTypeItemModalW from "../../4-Widgets/AddTaskTypeItemModalW";
import BarW from "../../4-Widgets/BarW";
import ConsentDeleteTaskListModalW from "../../4-Widgets/ConsentDeleteTaskListModalW";
import ConsentDeleteTaskModalW from "../../4-Widgets/ConsentDeleteTaskModalW";
import DeleteTaskTypeModalW from "../../4-Widgets/DeleteTaskTypeModalW";
import DialW from "../../4-Widgets/DialW";
import EditTaskListItemModalW from "../../4-Widgets/EditTaskListItemModalW";
import EditTaskTypeItemModalW from "../../4-Widgets/EditTaskTypeItemModalW";
import FiltersW from "../../4-Widgets/FiltersW";
import MenuW from "../../4-Widgets/MenuW";
import TaskListW from "../../4-Widgets/TaskListW";
import Footer from "../../5-Features/Footer";
import Alert from "../../5-Features/ui/Alert";
import s from "./index.module.scss";
import TitleComp from "../../7-Shared/lib/Title";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //Если юзер не авторизован
    const user = reactLocalStorage.get("user");
    if (!user) navigate("/greetings", { replace: true });
  }, []);

  return (
    <div className={s.wrap}>
      <TitleComp title="OKR-detox - ваши задачи"/>
      <Alert />
      <MenuW />
      <ConsentDeleteTaskModalW />
      <ConsentDeleteTaskListModalW />
      <AddTaskListItemModalW />
      <AddTaskTypeItemModalW />
      <DeleteTaskTypeModalW />
      <EditTaskTypeItemModalW />
      <EditTaskListItemModalW />
      <BarW />
      <Container className={s.content} maxWidth="xl">
        <TaskListW>
          <FiltersW />
        </TaskListW>
      </Container>
      <AddTaskModalW />
      <DialW />
      <Footer />
    </div>
  );
};

export default Main;
