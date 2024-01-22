import { useEffect, useState } from "react";
import sendgrid, { MailDataRequired } from "@sendgrid/mail";

sendgrid.setApiKey(
  "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"
);

const useSendGrid = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {}, []);

  // process.env.REACT_APP_SENDGRID_API_KEY
  const sendEmail = async (
    emailData: MailDataRequired | MailDataRequired[]
  ) => {
    try {
      setLoading(true);
      setError(null);

      // Make a request to your server to send the email
      const response = await sendgrid.send(emailData);

      if (!response) {
        throw new Error("Failed to send email");
      }

      console.log("Email sent successfully");
    } catch (err) {
      console.error(err);
      setError("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return {
    sendEmail,
    loading,
    error,
  };
};

export default useSendGrid;
