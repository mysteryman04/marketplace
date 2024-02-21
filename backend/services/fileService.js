const minio = require('minio');
const util = require('util');
const minioClient = new minio.Client({
    endPoint: '185.22.65.85',
    port: 9000,
    useSSL: false,
    accessKey: 'cv9BmL6Z231SXV93eWrS',
    secretKey: '5B9gxXPtteU0SAaw21i6YmvsHs2IXcMcWQ23Zln2'
});
const bucketName = 'ems';


const uploadFile = async (file,path) => {
    const metaData = {
        'Content-Type': file.mimetype
    };
    let fileName = new Date().getTime() + file.originalname;
    minioClient.fPutObject(bucketName, fileName, path, metaData, function(err, etag) {
        if (err) {
            throw new Error(err);
        }
    });
    return fileName;
}

async function getFileFromMinio(fileName) {
    return new Promise((resolve, reject) => {
        minioClient.getObject(bucketName, fileName, (err, stream) => {
            if (err) {
                reject(err);
            } else {
                let fileData = '';
                stream.on('data', (chunk) => {
                    fileData += chunk;
                });
                stream.on('end', () => {
                    resolve(fileData);
                });
                stream.on('error', (error) => {
                    reject(error);
                });
            }
        });
    });
}

module.exports = {
    uploadFile,
    getFileFromMinio
}