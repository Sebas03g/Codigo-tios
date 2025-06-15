import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // o tu proveedor SMTP
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const enviarCorreo = async ({ to, subject, text, html }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  return await transporter.sendMail(mailOptions);
};
