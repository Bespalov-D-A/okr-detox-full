import { useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { useUser } from "../../../6-Entities/user";
import { userService } from "../../../7-Shared/API/userService";
import s from "./index.module.scss";
import { FAILED_GET_USER_PROFILE } from "../../../7-Shared/assests/Constants";
import { useLoader } from "../../../7-Shared/hooks/useLoad";

const ProfileBlock = () => {
  const setAlert = useAlert((state) => state.setAlert);
  const setUser = useUser((state) => state.setUser);
  const user = useUser((state) => state.user);

  const [isFetch, isLoad, error] = useLoader(
    FAILED_GET_USER_PROFILE,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      const response = await userService.getUserProfile(token);
      setUser(response.data);
    }
  );

  useEffect(() => {
    isFetch();
  }, []);

  return (
    <div className={s.profile}>
      <b> {user && user.email}</b>
    </div>
  );
};

export default ProfileBlock;
