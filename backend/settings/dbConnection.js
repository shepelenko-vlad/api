const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'vetclinic'
});

connection.connect((error) => {
    if(error){
        return console.log('Ошибка подключения к БД')
    }
    else 
    {
        return console.log('Подключение прошло успешно')
    }
})

module.exports = connection