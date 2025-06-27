import PDFDocument from 'pdfkit';
import fs from 'fs';                // Para streams
import fsPromises from 'fs/promises';  // Para funciones async como unlink
import path from 'path';
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFile: 'credenciales.json',
  scopes: ['https://www.googleapis.com/auth/drive.file'],
});

export async function generarPDF(nombre = 'archivo.pdf', data) {
  const carpetaDestino = '../uploads/documentos';
  const rutaArchivo = path.join(carpetaDestino, nombre);

  const doc = crearPDF(data);
  const stream = fs.createWriteStream(rutaArchivo);
  doc.pipe(stream);

  doc.fontSize(20).text('Archivo generado y guardado correctamente.');
  doc.end();

  stream.on('finish', async () => {
    console.log(`PDF guardado en: ${rutaArchivo}`);
    await subirArchivoDrive(rutaArchivo, nombre);
  });

  stream.on('error', (err) => {
    console.error('Error al guardar el PDF:', err);
  });
}

export async function subirArchivoDrive(archivoPath, nombreEnDrive) {
  const driveService = google.drive({ version: 'v3', auth: await auth.getClient() });

  const res = await driveService.files.create({
    requestBody: {
      name: nombreEnDrive,
    },
    media: {
      mimeType: 'application/pdf',
      body: fs.createReadStream(archivoPath),
    },
  });

  console.log('Archivo subido con ID:', res.data.id);
  await eliminarArchivo(archivoPath);
}

export async function eliminarArchivo(rutaArchivo) {
  try {
    await fsPromises.unlink(rutaArchivo);
    console.log('Archivo eliminado:', rutaArchivo);
  } catch (error) {
    console.error('Error al eliminar archivo:', error);
  }
}


function crearPDF(data){
    return new PDFDocument();
}

