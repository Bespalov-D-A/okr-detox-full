import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { useEffect, useRef } from "react";
import { useAlert, useCommon } from "../../../6-Entities/common";
import { userService } from "../../../7-Shared/API/userService";
import { saveUserData } from "../../../7-Shared/lib/saveUserData";
import { useNavigate } from "react-router-dom";
import {
  CONFIRM_YOU_ARE_NOT_A_ROBOT,
  FAILED_AUTHENTICATION,
  FAILED_SEND_RECOVERY_PASS_LINK,
  SUCCESS_SENT_RECOVERY_PASS_LINK,
} from "../../../7-Shared/assests/Constants";
import { forgotPassFields } from "../../../6-Entities/fields/ForgotPassFields";
import { forgotPassValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/forgotPass";

const ForgotPassForm = ({ children, captchaFunc }) => {
  const formBtnDisabled = useCommon((state) => state.formBtnDisabled);
  const setFormBtnDisabled = useCommon((state) => state.setFormBtnDisabled);
  const setAlert = useAlert((state) => state.setAlert);
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    //Делаем кнопку submit неактивным
    setFormBtnDisabled(true);
  }, []);

  const forgotFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPassValidationSchema,
    onSubmit: (values) => {
      const recaptchaValue = captchaRef.current.getValue();
      if (!recaptchaValue) {
        setAlert({ type: "error", msg: CONFIRM_YOU_ARE_NOT_A_ROBOT });
      } else {
        userService
          .recoveryPassword(values)
          .then((res) => {
            setAlert({ type: "info", msg: SUCCESS_SENT_RECOVERY_PASS_LINK });
          })
          .catch((e) => {
            setAlert({ type: "error", msg: FAILED_SEND_RECOVERY_PASS_LINK });
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
      onSubmit={forgotFormik.handleSubmit}
    >
      {forgotPassFields.map((field) => (
        <DefaultField
          key={field.name}
          name={field.name}
          label={field.label}
          fieldtype={field.fieldType}
          setFieldTouched={forgotFormik.setFieldTouched}
          value={forgotFormik.values[field.name]}
          onChange={forgotFormik.handleChange}
          touched={forgotFormik.touched[field.name]}
          errors={forgotFormik.errors}
        />
      ))}
      {children}
      {captchaFunc(captchaRef)}
      <div className={s["btn-wrap"]}>
        <Button disabled={formBtnDisabled} type="submit" variant="contained">
          Отправить запрос
        </Button>
      </div>
    </Box>
  );
};

export default ForgotPassForm;
