import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { useEffect, useRef } from "react";
import { useAlert, useCommon } from "../../../6-Entities/common";
import { userService } from "../../../7-Shared/API/userService";
import { recoveryValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/recoveryPassword";
import { recoveryPasswordFields } from "../../../6-Entities/fields/RecoveryFields";
import {
  CONFIRM_YOU_ARE_NOT_A_ROBOT,
  FAILED_TO_CREATE_ACCOUNT,
  SEND_RECOVERY_PASSWORD_SUCCESS,
} from "../../../7-Shared/assests/Constants";

const RecoveryPassword = ({ children, captchaFunc }) => {
  const formBtnDisabled = useCommon((state) => state.formBtnDisabled);
  const setFormBtnDisabled = useCommon((state) => state.setFormBtnDisabled);
  const setAlert = useAlert((state) => state.setAlert);
  const captchaRef = useRef(null);

  useEffect(() => {
    //Делаем кнопку submit неактивной
    setFormBtnDisabled(true);
  }, []);

  const recoveryFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: recoveryValidationSchema,
    onSubmit: (values) => {
      const recaptchaValue = captchaRef.current.getValue();
      if (!recaptchaValue) {
        setAlert({ type: "error", msg: CONFIRM_YOU_ARE_NOT_A_ROBOT });
      } else {
        console.log(values);
        userService
          .recoveryPassword(values)
          .then((res) => {
            setAlert({ type: "success", msg: SEND_RECOVERY_PASSWORD_SUCCESS });
          })
          .catch((e) => {
            setAlert({ type: "error", msg: FAILED_TO_CREATE_ACCOUNT });
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
      onSubmit={recoveryFormik.handleSubmit}
    >
      {recoveryPasswordFields.map((field) => (
        <DefaultField
          key={field.name}
          name={field.name}
          label={field.label}
          fieldtype={field.fieldType}
          setFieldTouched={recoveryFormik.setFieldTouched}
          value={recoveryFormik.values[field.name]}
          onChange={recoveryFormik.handleChange}
          touched={recoveryFormik.touched[field.name]}
          errors={recoveryFormik.errors}
        />
      ))}
      {children}
      {captchaFunc(captchaRef)}
      <div className={s["btn-wrap"]}>
        <Button disabled={formBtnDisabled} type="submit" variant="contained">
          Войти
        </Button>
      </div>
    </Box>
  );
};

export default RecoveryPassword;
