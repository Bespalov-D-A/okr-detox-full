import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import AuthModalW from "../../4-Widgets/AuthModalW";
import ForgotModalW from "../../4-Widgets/ForgotModalW";
import GreetingW from "../../4-Widgets/GreetingW";
import GreetingModalContent from "../../5-Features/modals/Content/GreetingModal";
import GreetingModal from "../../5-Features/modals/GreetingModal";
import Alert from "../../5-Features/ui/Alert";
import s from "./index.module.scss";
import TitleComp from "../../7-Shared/lib/Title";

const Greeting = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //Если юзер авторизован
    const user = reactLocalStorage.get("user");
    if (user) navigate("/main", { replace: true });
  }, []);

  return (
    <div className={s.wrap}>
      <TitleComp title="OKR-detox - живи легко"/>
      <Alert />
      <GreetingModal component={GreetingModalContent} />
      <ForgotModalW />
      <AuthModalW />
      <Container maxWidth="xl" className={s.container}>
        <GreetingW />
      </Container>
    </div>
  );
};

export default Greeting;
