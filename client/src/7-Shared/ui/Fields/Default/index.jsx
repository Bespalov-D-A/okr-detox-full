import TextField from "@mui/material/TextField";
import s from "./index.module.scss";

const DefaultField = (props) => {
  const {
    name,
    value,
    onChange,
    setFieldTouched,
    errors,
    multiline,
    touched,
    required,
    fieldtype,
    label = "Введите значение",
    variant = "standard",
  } = props;

  return (
    <TextField
      id={name}
      name={name}
      className={s.field}
      multiline={multiline && multiline}
      value={value}
      onChange={onChange}
      required={required}
      variant={variant}
      type={fieldtype}
      label={label}
      onBlur={() => setFieldTouched(name)}
      error={errors[name] && touched}
      helperText={errors[name] && touched ? errors[name] : null}
    />
  );
};
export default DefaultField;
