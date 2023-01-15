import fs, { promises } from "fs";	
import path from "path";

async function saveMedia(attachedDocument, filePath, fileName, fileExtension) {

  try {

      const base64 = attachedDocument.split(",")[1];
      filePath = path.join(__dirname,`../../public/${filePath}`);

      if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
      }
      filePath = `${filePath}/${fileName}.${fileExtension}`
      fs.writeFileSync(filePath, base64, 'base64', function (err) {
          if (err) {
              return { statusCode: 500, data: 'Ocorreu um erro' }
          } else {
              return;
          }
      });

      const uploadsIndex = filePath.indexOf('uploads')
      return filePath.substring(uploadsIndex)

  } catch (error) {
      console.log(error)
      return { statuscode: 500, data: error }
  }
}

export { saveMedia }