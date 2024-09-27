// src/app/api/sendEmail/route.ts

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, telephone, message } = await req.json();

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sanjaymasta@gmail.com', // Your Gmail address
      pass: 'GmailSanjay@2024np,npm', // Your Gmail password or app-specific password
    },
  });

  const mailOptions = {
    from: 'sanjaymasta@gmail.com', // Sender's email
    to: 'sourabh@enhmedia.com', // Receiver's email
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${telephone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
