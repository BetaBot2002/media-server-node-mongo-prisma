import { unlink } from 'fs/promises';

const deleteFileFromSystem = async (filePath) => {
  try {
    await unlink(filePath);
    console.log(`File ${filePath} has been deleted.`);
  } catch (err) {
    console.error(`Error deleting the file: ${err}`);
  }
};

export {
  deleteFileFromSystem
}
