import jwt_decode from "jwt-decode";

export const isTokenValid = (token) => {
  try {
    const decoded = jwt_decode(token);
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp < now) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
