const response = require('./../response')
const setHeaders = require('./../settings/setHeaders')
const exportUsersToExcel = require('./../settings/exportService')

const dbConnection = require('./../settings/dbConnection')

exports.exportExcel = (req, res) => {
    setHeaders(res)
    dbConnection.query('SELECT ClientFIO, ClientAdress, ClientPhone FROM clients', (error, row, fields) => {
        if(error){
          console.log(error)
        }
        else{
          response.status(row,res)
          console.log(row);
        
          const workSheetColumnNames = [
            "FIO",
            "Adress",
            "Phone"
          ]
        
          const workSheetName = 'Clients';
          const filePath = './outputFiles/excel-from-js.xlsx';

          exportUsersToExcel(row, workSheetColumnNames, workSheetName, filePath);
        }
    })
  
    // console.log("rows", row)
}