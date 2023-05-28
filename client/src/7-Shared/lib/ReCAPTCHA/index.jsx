import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ innerRef, handleChange }) => {
  const sitekey = process.env.REACT_APP_SITE_KEY 
  if(!sitekey) return <div>Не удалось загрузить капчу</div>
  return (
    <ReCAPTCHA
      sitekey={process.env.REACT_APP_SITE_KEY}
      ref={innerRef}
      onChange={handleChange}
    />
  );
};

export default ReCaptcha;
