import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, telephone, message } = await req.json();

  // Log environment variables to ensure they are accessible
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_PASS:', process.env.GMAIL_PASS);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail account
        pass: process.env.GMAIL_PASS, // Your Gmail app password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'sourabh@enhmedia.com',
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${telephone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);  // Log error for debugging
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
