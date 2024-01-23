import ReCAPTCHA from "react-google-recaptcha";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import COLORS from "../../../../../../styles/colors";
import { messages } from "../../../../config/messages";
import useContactUsForm from "./useContactUsForm";
import useReCaptcha from "../../../../../../hooks/useReCaptcha";

const ContactUsForm: React.FC = () => {
  const { captchaRef, verifyToken, siteKey } = useReCaptcha();

  const { contactFormData, handleFormChange, handleFormSubmit } =
    useContactUsForm(captchaRef, verifyToken);

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{ height: "100%", backgroundColor: COLORS.MEDIUM_BACKGROUND_GREY }}
    >
      <Stack bgcolor={COLORS.MEDIUM_BACKGROUND_GREY} p={4}>
        <Typography fontSize={32} fontWeight={700}>
          {messages.getStarted}
        </Typography>
        <Typography fontSize={16} fontWeight={400} mb={1}>
          {messages.formSubText}
        </Typography>

        <Stack spacing={4}>
          <TextField
            name="name"
            variant="outlined"
            required
            value={contactFormData.name}
            placeholder={messages.namePlaceholder}
            onChange={handleFormChange}
          />

          <TextField
            name="email"
            type="email"
            variant="outlined"
            required
            value={contactFormData.email}
            placeholder={messages.emailPlaceholder}
            onChange={handleFormChange}
          />

          <TextField
            type="tel"
            name="contactNumber"
            variant="outlined"
            placeholder={messages.contactNumberPlaceholder}
            required
            onChange={handleFormChange}
            value={contactFormData.contactNumber}
            inputProps={{
              pattern: "[0-9+]+",
              title: "Only numbers and the plus sign (+) are allowed.",
            }}
          />

          <TextField
            name="message"
            variant="outlined"
            placeholder={messages.messagePlaceholder}
            multiline
            rows={4}
            value={contactFormData.message}
            onChange={handleFormChange}
          />
          <ReCAPTCHA
            type="image"
            sitekey={siteKey as string}
            ref={captchaRef}
          />
          <Box>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                justifySelf: "start",
                textTransform: "uppercase",
                bgcolor: COLORS.DARK_BLUE,
                color: COLORS.WHITE,
                fontSize: 14,
              }}
            >
              {messages.sendMessage}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </form>
  );
};

export default ContactUsForm;
