import Captcha from "../../../5-Features/Captcha";
import RegistrationForm from "../../../5-Features/forms/RegistrationForm";
import GoogleAuth from "../../../5-Features/ui/GoogleAuth";

const RegFormW = () => {
  return (
    <div>
      <RegistrationForm
        captchaFunc={(innerRef) => <Captcha innerRef={innerRef} />}
        googleLogIn={() => <GoogleAuth />}
      />
    </div>
  );
};

export default RegFormW;
