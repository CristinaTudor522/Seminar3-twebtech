const express = require("express")

const app = express()

app.use('/', express.static('public'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/sendmessage', (request, response) =>{
    console.log(request.body)
    response.send('Am primit mesajul: '+request.body.message+", de la "+request.body.name)
})



app.listen(8080);

module.exports = app;