const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        mail: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});