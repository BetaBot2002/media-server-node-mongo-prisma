import { unlink } from 'fs/promises';

const deleteFile = async (filePath) => {
  try {
    await unlink(filePath);
    console.log(`File ${filePath} has been deleted.`);
  } catch (err) {
    console.error(`Error deleting the file: ${err}`);
  }
};

export {
    deleteFile
}
