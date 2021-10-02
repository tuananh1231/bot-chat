require("dotenv").config()
import express from 'express';
import viewEngine from './config/viewEngine'
import initWebRoute from './routers/web'
import bodyParser from 'body-parser'

let app = express()

//config view engine
viewEngine(app)
    //use bodyParser to post data to
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
    //init all web routers
initWebRoute(app)

let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`App is running at the port ${port}`)
})