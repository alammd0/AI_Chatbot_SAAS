
import transporter from "../config/nodemailer";

const sendEmail = async (to, subject, text, html) => {
    try {

        const response = await transporter.sendMail({
            from : process.env.SMTP_USER,
            to,
            subject,
            text,
            html
        });

        console.log(response);

        console.log("Email sent success")
    }catch(error){
        console.log(error);
    }
}

export default sendEmail;