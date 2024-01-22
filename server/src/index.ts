import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

app.use(cors());
app.use(express.json());

app.post(
  "/contact-us",
  async (req: Request, res: Response, next: NextFunction) => {
    const msg: sgMail.MailDataRequired = {
      from: "sales@v2stech.com", // Change to your verified sender
      to: "sales@v2stech.com", // // Change to your recipient
      subject: "New business enquiry",
      text: `
        Name: ${req.body.name}

        Email: ${req.body.email}
        
        Contact number: ${req.body.contact_number}
        
        Message: ${req.body.message}
      `,
    };

    try {
      const response = await sgMail.send(msg);
      res.json(response);
      next();
    } catch (error: any) {
      res.status(error.code).json(error.response.body);
    }
  }
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
