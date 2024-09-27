// src/app/api/sendEmail/route.ts

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, telephone, message } = await req.json();

  try {
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
      subject: 'New Inquiry from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${telephone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: unknown) { // Update the type here from `any` to `unknown`
    if (error instanceof Error) { // Ensure that the error is properly handled
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: false, error: 'Unknown error occurred' }), { status: 500 });
  }
}
