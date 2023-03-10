import { createBlob } from "../../providers/azureStorage";
import File from "../../repository/fileRepository";

const _fileRepository = new File();
const saveInStorageAndDb = async (job) => {
  const files = job.data;
  console.log(files);
  for (const file of files) {
    const url = await Promise((resolve, reject) => {
      return resolve(
        createBlob(file.base64, file.extension)
          .then((response) => {
            return response;
          })
          .catch((error) => {
            reject(error);
          })
      );
    });

    const fileCreated = await _fileRepository.create(file.name, url);

    return fileCreated;
  }
};

const deleteInStorageAndDb = async (job) => {
  const files = job.data;

  for (const file of files) {
    await Promise((resolve, reject) => {
      return resolve(
        deleteBlob(file.path)
          .then((response) => {
            return response;
          })
          .catch((error) => {
            reject(error);
          })
      );
    });

    await _fileRepository.delete(file.id);
  }
};

export { saveInStorageAndDb };
