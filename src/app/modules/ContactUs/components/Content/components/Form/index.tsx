import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import COLORS from "../../../../../../styles/colors";

const ContactUsForm: React.FC = () => (
  <>
    <Stack bgcolor="#f7f7f7" p={4}>
      <Typography fontSize={32} fontWeight={700}>
        Ready to Get Started?
      </Typography>
      <Typography fontSize={16} fontWeight={400}>
        Your email address will not be published. Required fields are marked *
      </Typography>

      <Stack spacing={4}>
        <TextField name="name" variant="outlined" placeholder="Your Name *" />
        <TextField name="email" variant="outlined" placeholder="Your Email *" />
        <TextField
          name="contact_number"
          variant="outlined"
          placeholder="Your Contact Number *"
        />
        <TextField
          name="message"
          variant="outlined"
          placeholder="Message"
          multiline
          rows={4}
        />

        <Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              justifySelf: "start",
              textTransform: "uppercase",
              bgcolor: COLORS.DARK_BLUE,
              color: COLORS.WHITE,
            }}
          >
            Send Message
          </Button>
        </Box>
      </Stack>
    </Stack>
  </>
);

export default ContactUsForm;
