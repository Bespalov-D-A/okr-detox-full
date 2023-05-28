import s from "./index.module.scss";

const FooterUI = ({ children }) => {
  return <div className={s.footer}>{children}</div>;
};

export default FooterUI;
