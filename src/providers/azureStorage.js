import { BlobServiceClient } from "@azure/storage-blob";
import { v4 as uuid } from "uuid";

const blobService = BlobServiceClient.fromConnectionString(
  'DefaultEndpointsProtocol=https;AccountName=victorlearns;AccountKey=PMU6ktzYxRjQQLoxY/BNW5HE4Bnp4wwI1NFGymGOfszUzZWa0JS4mEs0WQDL2+c1ymxI4EIyX6i3+AStv7z3mw==;EndpointSuffix=core.windows.net'
);

const containerClient = blobService.getContainerClient("public");

async function createBlob(base64, extension) {
  try {

    const filename = `${uuid()}.${extension}`;
    console.log(filename);
    const data = base64.split(",")[1];
    const buffer = Buffer.from(data, "base64");

    const blockBlobClient = containerClient.getBlockBlobClient(filename);
    await blockBlobClient.uploadData(buffer).then((response) => {
      console.log(response);
    });

    return blockBlobClient.url;
  } catch (error) {
    return { statuscode: 500, error: error };
  }
}

async function downloadBlob(blobName) {
  try {
    const blobPath = blobName.split("/");
    blobName = blobPath[blobPath.length - 1];
    const blobClient = containerClient.getBlobClient(blobName);
    const downloadedResponse = await blobClient.downloadToBuffer();

    return downloadedResponse.toString("base64");
  } catch (error) {
    return { statuscode: 500, error: error };
  }
}

async function deleteBlob(blobName) {
  try {
    const blobPath = blobName.split("/");
    blobName = blobPath[blobPath.length - 1];
    const blobClient = containerClient.getBlobClient(blobName);
    if (!(await blobClient.exists())) {
      console.log("Blob does not exist");
      return "Arquivo não encontrado.";
    }

    const result = await blobClient.delete();
    console.log(result);
    return { status: 200 };
  } catch (error) {
    console.log(error);
    return { statuscode: 500, error: error };
  }
}


export { createBlob, downloadBlob, deleteBlob };