import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendRecoveryEmail = async (email, code) => {
  await transporter.sendMail({
    from: `"Walk & Save" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Password Recovery Code",
    html: `
      <h2>Password Recovery</h2>
      <p>Your recovery code is:</p>
      <h1 style="letter-spacing: 4px;">${code}</h1>
      <p>This code will expire in 10 minutes.</p>
    `,
  });
};
