const response = require('./../response')

const md5 = require('md5')
const crypto = require('crypto')

const dbConnection = require('./../settings/dbConnection')
const setHeaders = require('./../settings/setHeaders')

exports.getlogin = (req, res) => {

    setHeaders(res)

    var hashPass = crypto.createHash("md5").update(req.body.UserPassword).digest("base64")
    dbConnection.query('SELECT COUNT(*) AS count, position.RoleID FROM position INNER JOIN personal ON position.PositionID = personal.PositionID '
                     + 'INNER JOIN  users ON personal.PersonID = users.PersonID WHERE users.UserLogin = "' + req.body.UserLogin
                     + '" AND UserPassword =  "' + hashPass + '"',
    (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            var rows = JSON.parse(JSON.stringify(results[0]));
            response.status(rows, res)
        }
    })
}