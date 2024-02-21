const fileService = require('../services/fileService');
const response = require('../utils/Response');

const uploadFile = async (req, res) => {
    try {
        const file = req.file;
        const path = file.path;
        const fileName = await fileService.uploadFile(file,path);
        return res.status(200).json(response.Success(fileName));
    } catch (error) {
        return res.status(400).json(response.Error(error.message));
    }
}

async function getFile(req, res) {
    const { fileName, bucketName } = req.params;
    try {
        const fileData = await fileService.getFileFromMinio(fileName, bucketName);
        const decodedString = Buffer.from(fileData, 'base64').toString('utf-8');
        res.status(200).send(response.Success(decodedString));
    } catch (error) {
        res.status(500).send(response.Error(error.message));
    }
}


module.exports = {
    uploadFile,
    getFile
}