import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Faltan datos: nombre o email." },
        { status: 400 }
      );
    }

    // Leer plantilla HTML
    const templatePath = path.join(
      process.cwd(),
      "public",
      "email",
      "vita-correo.html"
    );

    let htmlContent = fs.readFileSync(templatePath, "utf8");

    htmlContent = htmlContent.replace(/\[Nombre\]/g, name);

    // Configurar transporte de correo
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar contenido del correo
    const mailOptions = {
      from: `"The Vita Soporte" <${process.env.EMAIL_USER}>`,
      to: email,
      cc: process.env.EMAIL_USER, // copia al correo de soporte
      subject: `¡Bienvenido a VITA, ${name}!`,
      html: htmlContent,
      attachments: [
        {
          filename: "logo.png",
          path: path.join(process.cwd(), "public", "logo.png"),
          cid: "logo@vita",
        },
      ],
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: `Correo enviado correctamente a ${name} (${email})`,
    });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return NextResponse.json(
      { success: false, message: "Error enviando correo" },
      { status: 500 }
    );
  }
}
