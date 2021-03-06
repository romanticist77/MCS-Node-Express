import cookieSession from 'cookie-session'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from "express"
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import flash from 'connect-flash'
import {router} from './config/routes.js'
import {setupAssets} from './config/assets.js'

await mongoose.connect("mongodb+srv://achmedow:Z7gk4YJHQUre7OKA@cluster0.lluxj.mongodb.net/?retryWrites=true&w=majority")

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.set('trust proxy, 1')
app.use(cookieSession({
    name: 'session',
    secret: 'test',
    //Cookie options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(flash())

app.use('/', router)

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

setupAssets(app, express)