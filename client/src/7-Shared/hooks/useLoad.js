import { useState } from "react";

export const useLoader = (errMsg, setAlert, callback) => {
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(null);

  const isFetch = async (...args) => {
    try {
      setIsLoad(true);
      setError(null);
      await callback(...args);
    } catch (e) {
      console.log(e);
      setAlert("error", errMsg);
    } finally {
      setIsLoad(false);
    }
  };

  return [isFetch, isLoad, error];
};
