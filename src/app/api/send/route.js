import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "Karim <tamamkarim88@gmail.com>",
      to: ["tamamkarim88@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New message from: {email}</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}