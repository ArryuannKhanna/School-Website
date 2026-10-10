import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { student, parent, phone, cls, message } = body ?? {};

  if (!student || !parent || !phone || !cls) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!/^[0-9+\s-]{10,15}$/.test(String(phone))) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  // TODO: deliver enquiries somewhere the school office will see them
  // (e.g. email via Resend/Nodemailer, a Google Sheet, or a database).
  // For now they are only written to the server log.
  console.log("New admission enquiry:", { student, parent, phone, cls, message, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
