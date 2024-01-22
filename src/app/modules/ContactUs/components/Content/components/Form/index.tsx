import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import COLORS from "../../../../../../styles/colors";
import { messages } from "../../../../config/messages";

const ContactUsForm: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Your submission was successful.");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{ height: "100%", backgroundColor: COLORS.FORM_BACKGROUND_GREY }}
    >
      <Stack bgcolor={COLORS.FORM_BACKGROUND_GREY} p={4}>
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
            placeholder={messages.namePlaceholder}
            required
          />

          <TextField
            name="email"
            type="email"
            variant="outlined"
            placeholder={messages.emailPlaceholder}
            required
          />

          <TextField
            type="tel"
            name="contact_number"
            variant="outlined"
            placeholder={messages.contactNumberPlaceholder}
            required
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
