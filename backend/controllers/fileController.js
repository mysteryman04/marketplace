const fileService = require('../services/fileService');
const response = require('../utils/Response');
const minio = require("minio");
const minioClient = new minio.Client({
    endPoint: '185.22.65.85',
    port: 9000,
    useSSL: false,
    accessKey: 'cv9BmL6Z231SXV93eWrS',
    secretKey: '5B9gxXPtteU0SAaw21i6YmvsHs2IXcMcWQ23Zln2'
});
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
    const filename = req.params.fileName;
    try {
        const fileStream = await minioClient.getObject('ems', filename);
        res.setHeader('Content-disposition', `attachment; filename=${filename}`);
        res.setHeader('Content-type', 'image/png');
        fileStream.pipe(res);
    } catch (err) {
        console.error('Error retrieving file:', err);
        res.status(400).json(response.Error('Error retrieving file'));
    }
}


module.exports = {
    uploadFile,
    getFile
}