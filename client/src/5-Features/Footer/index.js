import Container from "@mui/material/Container";
import FooterUI from "../../7-Shared/ui/FooterUI";
import s from "./index.module.scss";

const Footer = () => {
  return (
    <FooterUI>
      <Container maxWidth="xl" className={s.container}>
        <span className={s.copy}>Copyright {new Date().getFullYear()} ©</span>
      </Container>
    </FooterUI>
  );
};

export default Footer;
