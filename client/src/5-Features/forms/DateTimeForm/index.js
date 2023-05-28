import TextField from "@mui/material/TextField";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import "react-datepicker/dist/react-datepicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Typography from "@mui/material/Typography";
import s from "./index.module.scss";

const DateTimeForm = ({ title, time, setTime, date, setDate }) => {
  return (
    <div className={s.wrap}>
      <Typography className={s.title} component="p">
        {title && title}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Выберите дату"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} style={{ marginRight: 12 }} />
          )}
        />
        <MobileTimePicker
          label="Выберите время"
          ampm={false}
          value={time}
          onChange={(newValue) => {
            setTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateTimeForm;
