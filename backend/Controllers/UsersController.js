const response = require('./../response')

const md5 = require('md5')

const crypto = require('crypto')

const dbConnection = require('./../settings/dbConnection')
const setHeaders = require('./../settings/setHeaders')

exports.getUsers = (req, res) => {
    setHeaders(res)
    dbConnection.query('SELECT * FROM `users`', (error, row, fields) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(row, res)
            console.log(row, res)
        }
    })
}

exports.insertUser = (req, res) => {
    setHeaders(res)
    var hashPass = crypto.createHash("md5").update(req.body.UserPassword).digest("base64")
    const sqlQuery = "INSERT INTO users (PersonID, UserLogin, UserPassword) " 
                   + "VALUES (" + req.body.PersonID +", '" 
                                + req.body.UserLogin + "', '" 
                                + hashPass + "')";
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error);
        }
        else {
            response.status(results, res)
        }
    });
}

exports.updateUser = (req, res) => {
    setHeaders(res)
    var hashPass = crypto.createHash("md5").update(req.body.UserPassword).digest("base64")
    const sqlQuery = "UPDATE users SET users.PersonID = " + req.body.PersonID 
                   + ", users.UserLogin = '" + req.body.UserLogin 
                   + "', users.UserPassword = '" + hashPass 
                   + "' WHERE users.UserID = " + req.body.UserID + "";                           
        
        dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error);
        }
        else {
            response.status(results, res)
        }
    })
}

exports.deleteUser = (req, res) => {
    setHeaders(res)
    console.log(res)
    console.log(req)
    console.log(req.body)
    console.log(req.body.UserID)
    const sqlQuery = "DELETE FROM users WHERE UserID = '" + req.params.UserID + "'";
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error)
        }
        else {
            response.status(results, res)
        }
    })
}