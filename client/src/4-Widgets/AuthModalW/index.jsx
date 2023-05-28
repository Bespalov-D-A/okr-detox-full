import Forgot from "../../5-Features/auth/Forgot";
import Captcha from "../../5-Features/Captcha";
import AuthForm from "../../5-Features/forms/AuthForm";
import LoginModalContent from "../../5-Features/modals/Content/LoginModal";
import LoginModal from "../../5-Features/modals/LoginModal";
import GoogleAuth from "../../5-Features/ui/GoogleAuth";

const AuthModalW = () => {
  const modalContent = () => (
    <LoginModalContent
      captchaFunc={(innerRef) => <Captcha innerRef={innerRef} />}
      googleLogIn={() => <GoogleAuth />}
      authForm={(googleLogIn, captchaFunc, children) => (
        <AuthForm
          children={children}
          googleLogIn={googleLogIn}
          captchaFunc={captchaFunc}
        />
      )}
    >
      <Forgot />
    </LoginModalContent>
  );

  return <LoginModal component={modalContent} />;
};

export default AuthModalW;
