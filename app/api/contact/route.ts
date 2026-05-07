import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: NextRequest) {
  const { nombre, email, mensaje } = await req.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Configuración de email incompleta." }, { status: 500 });
  }

  if (!process.env.CONTACT_EMAIL) {
    console.error("CONTACT_EMAIL is not set");
    return NextResponse.json({ error: "Configuración de email incompleta." }, { status: 500 });
  }

  const { data, error } = await resend.emails.send({
    from: "Digi-AI Web <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `Nuevo contacto de ${nombre}`,
    html: `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Error al enviar el email.", detail: error.message }, { status: 500 });
  }

  console.log("Email sent:", data?.id);
  return NextResponse.json({ ok: true });
}
