import { reactLocalStorage } from "reactjs-localstorage";

export const clearJWT = (setAlert) => {
  reactLocalStorage.clear();
};
