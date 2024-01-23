import { useRef } from "react";

const useReCaptcha = () => {
  const captchaRef = useRef(null);

  const siteKey = process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY;
  const secretKey = process.env.REACT_APP_GOOGLE_RECAPTCHA_SECRET_KEY;

  const verifyToken = async (token: string) => {
    let APIResponse = [];

    try {
      let response = await fetch(`http://localhost:8080/verify-token`, {
        body: JSON.stringify({
          recaptcha_token: token,
          secret_key: secretKey,
        }),
      });

      const data = response.json();

      APIResponse.push(data);
      return APIResponse;
    } catch (error) {
      console.log(error);
      throw new Error("Error");
    }
  };

  return {
    siteKey,
    captchaRef,
    verifyToken,
  };
};

export default useReCaptcha;
