import { reactLocalStorage } from "reactjs-localstorage";
import {
  FAILED_SAVE_USER_DATA_TO_CLIENT,
  UNKNOWN_ERROR,
} from "../../assests/Constants";

//Утилита для сохранения данных только что
//авторизованного или зарегистрированного юзера
export const saveUserData = (serverResponse, setAlert) => {
  console.log(serverResponse);
  try {
    const key = serverResponse.token
      ? serverResponse.token
      : serverResponse.jwt
      ? serverResponse.jwt
      : null;
    if (
      key &&
      typeof key === "string" &&
      !!serverResponse.user &&
      typeof serverResponse.user === "object"
    ) {
      reactLocalStorage.set("jwt", key);
      reactLocalStorage.setObject("user", serverResponse.user);
    } else {
      setAlert({ type: "error", msg: FAILED_SAVE_USER_DATA_TO_CLIENT });
    }
  } catch (e) {
    setAlert({ type: "error", msg: UNKNOWN_ERROR });
  }
};
