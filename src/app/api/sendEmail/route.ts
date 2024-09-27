// src/app/api/sendEmail/route.ts

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, telephone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'sourabh@enhmedia.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${telephone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
  }
}
