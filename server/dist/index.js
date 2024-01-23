"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/verify-token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { recaptcha_token, secret_key } = req.body;
    try {
        let response = yield fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${recaptcha_token}`);
        return res.status(200).json({
            success: true,
            message: "Token successfully verified",
            verification_info: response.data,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error verifying token",
        });
    }
}));
app.post("/contact-us", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const msg = {
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
        const response = yield mail_1.default.send(msg);
        res.json(response);
        next();
    }
    catch (error) {
        res.status(error.code).json(error.response.body);
    }
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
