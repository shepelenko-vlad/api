const response = require('./../response')

const md5 = require('md5')
const crypto = require('crypto')

const dbConnection = require('./../settings/dbConnection')

exports.getlogin = (req, res) => {
    var hashPass = crypto.createHash("md5").update(req.query.UserPassword).digest("base64")
    dbConnection.query('SELECT COUNT(*) FROM users WHERE users.UserLogin = "' 
                      + req.query.UserLogin + '" and UserPassword = "' 
                      + hashPass + '"', 
    (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    })
}