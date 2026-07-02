export const forgotPasswordTemplate = (name, resetLink) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
            <td align="center">

                <table width="600" cellpadding="0" cellspacing="0"
                    style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.1);">

                    <!-- Header -->
                    <tr>
                        <td align="center"
                            style="background:#2563eb;padding:30px;color:#ffffff;">
                            <h1 style="margin:0;">Password Reset</h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding:40px;color:#333;line-height:1.8;">

                            <h2>Hello ${name},</h2>

                            <p>
                                We received a request to reset your password.
                                Click the button below to create a new password.
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding:30px 0;">
                                        <a href="${resetLink}"
                                            style="
                                                background:#2563eb;
                                                color:#ffffff;
                                                text-decoration:none;
                                                padding:14px 30px;
                                                border-radius:6px;
                                                display:inline-block;
                                                font-size:16px;
                                                font-weight:bold;
                                            ">
                                            Reset Password
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p>
                                If the button doesn't work, copy and paste the
                                following URL into your browser:
                            </p>

                            <p style="word-break:break-all;">
                                <a href="${resetLink}">
                                    ${resetLink}
                                </a>
                            </p>

                            <hr style="margin:30px 0;border:none;border-top:1px solid #ddd;">

                            <p style="color:#666;">
                                This password reset link will expire in <b>24 hours</b>.
                            </p>

                            <p style="color:#666;">
                                If you didn't request a password reset,
                                you can safely ignore this email.
                            </p>

                            <p>
                                Thanks,<br>
                                <b>Your Team</b>
                            </p>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center"
                            style="background:#f5f5f5;padding:20px;color:#888;font-size:13px;">
                            © ${new Date().getFullYear()} Your Company. All rights reserved.
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