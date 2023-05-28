import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleOAuth = (components) => {
  return (
    <div>
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_KEY}
      >
        {components()}
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleOAuth;
