import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    // Leer plantilla base del correo
    const templatePath = path.join(
      process.cwd(),
      "app",
      "email",
      "vita-correo.html"
    );
    let htmlContent = fs.readFileSync(templatePath, "utf8");

    // Reemplazar el nombre dinámicamente
    htmlContent = htmlContent.replace(/\[Nombre\]/g, name);

    // Configurar el transporte (SMTP)
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar opciones del correo
    const mailOptions = {
      from: `"The Vita Soporte" <${process.env.EMAIL_USER}>`,
      to: email,
      cc: process.env.EMAIL_USER,
      subject: "Bienvenido a VITA 🚀",
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
      message: "Correo enviado correctamente",
    });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return NextResponse.json(
      { success: false, message: "Error enviando correo" },
      { status: 500 }
    );
  }
}
