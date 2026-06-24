
import transporter from "../config/nodemailer.js";

const sendEmail = async (to, subject, text, html) => {
    try {

        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            text,
            html,
        });

        console.log(info.response);

        console.log("Email sent successfully");

    }
    catch (error) {
        console.log(error);
    }
}

export default sendEmail;