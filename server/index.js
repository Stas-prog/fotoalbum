import express, { urlencoded } from "express"
import fileUpload from "express-fileupload"
import * as path from "path"
import { URL } from "./utils/consts.js"
import cors from "cors"
import mongoose from "mongoose"
import router from "./routes/router.js"
import errorHendler from "./middlewares/errorHendler.js"
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve('static')))
app.use(express.static(path.join(__dirname, 'gallery/build')))
app.use(cors())
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHendler)

const start = async () => {
    try {
        await mongoose.connect(URL)
            .then(() => console.log('DB ok'))
            .catch((err) => console.log('DB error', err))
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()

