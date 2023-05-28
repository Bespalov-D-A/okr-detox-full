import { GoogleLogin } from "@react-oauth/google";

const GoogleOAuth = ({ responseMessage, errorMessage }) => {
  return (
    <GoogleLogin
      onSuccess={responseMessage}
      onError={errorMessage}
      width="400"
      size="large"
    />
  );
};

export default GoogleOAuth;
