import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: NextRequest) {
  const { nombre, email, mensaje } = await req.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Digi-AI Web <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `Nuevo contacto de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
