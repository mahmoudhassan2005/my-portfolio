require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

/*
  .env should contain:
  SMTP_HOST=smtp.example.com
  SMTP_PORT=587
  SMTP_USER=your_smtp_user
  SMTP_PASS=your_smtp_password
  RECEIVER_EMAIL=you@example.com
*/

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio contact from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} - ${email}</p>`
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email failed" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log(`Server listening on ${PORT}`));