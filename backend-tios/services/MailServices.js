import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generarPDF, subirArchivoDrive, eliminarArchivo } from './ArchivoServices.js'; // asegurate ruta correcta
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function enviarCorreoArchivo({ to, subject, text , dataFile }) {
  try {
    const nombreArchivo = dataFile.name;

    await generarPDF(nombreArchivo, dataFile);

    const idDrive = await subirArchivoDrive(`./documentos/${nombreArchivo}`, nombreArchivo);

    await eliminarArchivo(`./documentos/${nombreArchivo}`);

    text = `${text}\nTu archivo está listo. Puedes descargarlo aquí: https://drive.google.com/file/d/${idDrive}/view`;

    const info = await transporter.sendMail({
      from: `"Hidrogas" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    console.log('Correo enviado:', info.messageId);
    return { success: true, info };

  } catch (error) {
    console.error('Error al enviar correo:', error);
    return { success: false, error };
  }
}

export async function enviarCorreoSinArchivo({ to, subject, text, html }) {
  try {
    const info = await transporter.sendMail({
      from: `"Hidrogas" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Correo enviado:', info.messageId);
    return { success: true, info };
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return { success: false, error };
  }
}
