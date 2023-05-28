import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { regValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/registration";
import { regFields } from "../../../6-Entities/fields/RegFields";
import { useAlert, useCommon } from "../../../6-Entities/common";
import { userService } from "../../../7-Shared/API/userService";
import { saveUserData } from "../../../7-Shared/lib/saveUserData";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Typography from "@mui/material/Typography";
import {
  CONFIRM_YOU_ARE_NOT_A_ROBOT,
  FAILED_TO_CREATE_ACCOUNT,
  SUCCESS_ACCOUNT_CREATE,
} from "../../../7-Shared/assests/Constants";

const RegistrationForm = ({ captchaFunc, googleLogIn }) => {
  const formBtnDisabled = useCommon((state) => state.formBtnDisabled);
  const setAlert = useAlert((state) => state.setAlert);
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const regFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: regValidationSchema,
    onSubmit: (values) => {
      const recaptchaValue = captchaRef.current.getValue();
      if (!recaptchaValue) {
        setAlert({ type: "error", msg: CONFIRM_YOU_ARE_NOT_A_ROBOT });
      } else {
        console.log(values);
        userService
          .createUser(values)
          .then((res) => {
            setAlert({ type: "success", msg: SUCCESS_ACCOUNT_CREATE });
            saveUserData(res.data, setAlert);
            navigate("/main", { replace: true });
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
      onSubmit={regFormik.handleSubmit}
    >
      {googleLogIn()}
      <Typography variant="h4" component="h4" className={s.or}>
        или
      </Typography>
      {regFields.map((field) => (
        <DefaultField
          key={field.name}
          name={field.name}
          label={field.label}
          fieldtype={field.fieldType}
          setFieldTouched={regFormik.setFieldTouched}
          value={regFormik.values[field.name]}
          onChange={regFormik.handleChange}
          touched={regFormik.touched[field.name]}
          errors={regFormik.errors}
        />
      ))}
      {captchaFunc(captchaRef)}
      <div className={s["btn-wrap"]}>
        <Button
          id="btn-go-reg"
          disabled={formBtnDisabled}
          type="submit"
          variant="contained"
        >
          Зарегистрироваться
        </Button>
      </div>
    </Box>
  );
};

export default RegistrationForm;
