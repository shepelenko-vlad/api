const response = require('./../response')
const setHeaders = require('./../settings/setHeaders')

const dbConnection = require('./../settings/dbConnection')

exports.uploadFile = (req, res) => {
    setHeaders(res);
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
      }
    
      const file = req.files.file;
    
      file.mv(`${__dirname}/aboba/public/uploads/${file.name}`, err => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
    
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
      });
}

exports.getFiles = (req, res) => {
    setHeaders(res)
    dbConnection.query('SELECT * FROM documents', (error, row, fields) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(row, res)
        }
    })   
}