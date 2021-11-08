const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('./settings/routes')
routes(app)

app.listen(PORT, () => {
    console.log('Server starting on port: ', PORT)
})