import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { authValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/auth";
import { authFields } from "../../../6-Entities/fields/AuthFields";
import { useEffect, useRef } from "react";
import { useAlert, useCommon } from "../../../6-Entities/common";
import { userService } from "../../../7-Shared/API/userService";
import { saveUserData } from "../../../7-Shared/lib/saveUserData";
import { useNavigate } from "react-router-dom";
import {
  CONFIRM_YOU_ARE_NOT_A_ROBOT,
  FAILED_AUTHENTICATION,
} from "../../../7-Shared/assests/Constants";

const AuthForm = ({ googleLogIn, children, captchaFunc }) => {
  const formBtnDisabled = useCommon((state) => state.formBtnDisabled);
  const setFormBtnDisabled = useCommon((state) => state.setFormBtnDisabled);
  const setAlert = useAlert((state) => state.setAlert);
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    //Делаем кнопку submit неактивным
    setFormBtnDisabled(true);
  }, []);

  const authFormik = useFormik({
    initialValues: {
      authLogin: "",
      authPassword: "",
    },
    validationSchema: authValidationSchema,
    onSubmit: (values) => {
      const recaptchaValue = captchaRef.current.getValue();
      if (!recaptchaValue) {
        setAlert({ type: "error", msg: CONFIRM_YOU_ARE_NOT_A_ROBOT });
      } else {
        userService
          .authUser(values)
          .then((res) => {
            saveUserData(res.data);
            navigate("/main", { replace: true });
          })
          .catch((e) => {
            setAlert({ type: "error", msg: FAILED_AUTHENTICATION });
            console.log(e);
          });
      }
    },
  });

  return (
    <Box
      className={s["form"]}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={authFormik.handleSubmit}
    >
      {googleLogIn()}
      {authFields.map((field) => (
        <DefaultField
          key={field.name}
          name={field.name}
          label={field.label}
          fieldtype={field.fieldType}
          setFieldTouched={authFormik.setFieldTouched}
          value={authFormik.values[field.name]}
          onChange={authFormik.handleChange}
          touched={authFormik.touched[field.name]}
          errors={authFormik.errors}
        />
      ))}
      {children}
      {captchaFunc(captchaRef)}
      <div className={s["btn-wrap"]}>
        <Button
          id="btn-go-auth"
          disabled={formBtnDisabled}
          type="submit"
          variant="contained"
        >
          Войти
        </Button>
      </div>
    </Box>
  );
};

export default AuthForm;
