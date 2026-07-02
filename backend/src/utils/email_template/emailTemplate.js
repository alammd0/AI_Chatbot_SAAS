export const verifyEmailTemplate = (name, verificationUrl) => {
  return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Email Verification</title>
            </head>

            <body style="margin:0;padding:0;background:#f4f4f7;font-family:Arial,Helvetica,sans-serif;">

                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:40px 20px;">
                    <tr>
                        <td align="center">

                            <table width="600" cellpadding="0" cellspacing="0"
                            style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.08);">

                            <!-- Header -->
                            <tr>
                            <td
                            style="background:linear-gradient(135deg,#2563eb,#7c3aed);padding:35px;text-align:center;">
                            <h1 style="color:#ffffff;margin:0;font-size:28px;">
                            Welcome
                            </h1>
                            <p style="color:#e5e7eb;margin-top:10px;font-size:16px;">
                            Thanks for joining us!
                            </p>
                            </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                            <td style="padding:40px;">

                            <h2 style="margin-top:0;color:#111827;">
                            Hi ${name},
                            </h2>

                            <p style="font-size:16px;color:#4b5563;line-height:28px;">
                            Thank you for creating your account.
                            To activate your account, please verify your email address by clicking the button below.
                            </p>

                            <div style="text-align:center;margin:40px 0;">
                            <a
                            href="${verificationUrl}"
                            style="
                            background:#2563eb;
                            color:#ffffff;
                            padding:16px 36px;
                            text-decoration:none;
                            border-radius:8px;
                            display:inline-block;
                            font-size:16px;
                            font-weight:bold;">
                            Verify Email
                            </a>
                            </div>

                            <p style="font-size:15px;color:#6b7280;line-height:26px;">
                            This verification link will expire in
                            <strong>24 hours</strong>.
                            </p>

                            <p style="font-size:15px;color:#6b7280;line-height:26px;">
                            If the button doesn't work, copy and paste this URL into your browser:
                            </p>

                            <p style="
                            word-break:break-all;
                            background:#f3f4f6;
                            padding:15px;
                            border-radius:8px;
                            font-size:14px;
                            color:#2563eb;">
                            ${verificationUrl}
                            </p>

                            <p style="font-size:15px;color:#6b7280;line-height:26px;">
                            If you didn't create this account, you can safely ignore this email.
                            </p>

                            <p style="margin-top:40px;color:#111827;">
                            Best Regards,<br/>
                            <strong>Your Company</strong>
                            </p>

                            </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                            <td
                            style="background:#f9fafb;padding:25px;text-align:center;border-top:1px solid #e5e7eb;">

                            <p style="margin:0;color:#6b7280;font-size:14px;">
                            © ${new Date().getFullYear()} Your Company. All rights reserved.
                            </p>

                            <p style="margin-top:10px;color:#9ca3af;font-size:13px;">
                            This is an automated email. Please do not reply.
                            </p>

                            </td>
                            </tr>

                            </table>

                        </td>
                    </tr>
                </table>

            </body>
            </html>
            `;
};
