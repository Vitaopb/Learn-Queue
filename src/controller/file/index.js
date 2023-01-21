import { addQueue, removeQueue } from '../../providers/bull'

const saveFiles = async (req, res) => {
  try {
    const { files } = req.body;
    await addQueue.addBulk(files);
    return res.status(200).json({ message: 'Files added to queue' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const removeFiles = async (req, res) => {
  try {
    const fileIds = req.body;
    await removeQueue.addBulk(fileIds);
    return res.status(200).json({ message: 'Files added to queue' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { saveFiles, removeFiles }