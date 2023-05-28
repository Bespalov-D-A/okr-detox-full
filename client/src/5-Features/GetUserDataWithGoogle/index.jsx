import CircularProgress from "@mui/material/CircularProgress";
import queryString from "query-string";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAlert } from "../../6-Entities/common";
import { userService } from "../../7-Shared/API/userService";
import { FAILED_TO_GOOGLE_AUTH } from "../../7-Shared/assests/Constants";
import { saveUserData } from "../../7-Shared/lib/saveUserData";
import s from "./index.module.scss";

const GetUserDataWithGoogle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setAlert = useAlert((state) => state.setAlert);

  useEffect(() => {
    if (!location) {
      return;
    }

    const { search } = location;
    const parsed = queryString.parse(search);
    userService
      .getUserDataWithGoogleAuth(parsed.code)
      .then((res) => saveUserData(res.data.data, setAlert))
      .then(() => navigate("/main", { replace: true }))
      .catch((e) => {
        setAlert("error", FAILED_TO_GOOGLE_AUTH);
        navigate("/main", { replace: true });
        console.log(e);
      });
  }, [location]);

  return (
    <div className={s.wrap}>
      <CircularProgress />
    </div>
  );
};

export default GetUserDataWithGoogle;
