import * as services from '../services/MailServices.js';

export async function sendMailFile(req, res) {
  try {
    const { to, subject, text, dataFile } = req.body;

    const answer = await enviarCorreo({  to, subject, text, dataFile });

    if (answer.success) {
      return res.status(200).json({ message: "Se mandó el correo de forma exitosa" });
    }

    return res.status(500).json({ mensaje: 'Error interno del servidor.' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
}

export async function sendMail(req, res) {
  try {
    const { to, subject, text, html } = req.body;

    const answer = await enviarCorreo({ to, subject, text, html });

    if (answer.success) {
      return res.status(200).json({ message: "Se mandó el correo de forma exitosa" });
    }

    return res.status(500).json({ mensaje: 'Error interno del servidor.' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
}

