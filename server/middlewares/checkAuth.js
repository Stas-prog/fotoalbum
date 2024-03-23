import jwt from "jsonwebtoken"
import { SECRET } from "../utils/consts.js"

export default function (req, res, next) {
    if (req.metod === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Не авторизований' })
        }
        const decoded = jwt.verify(token, SECRET)
        req.user = decoded

        next()
    }
    catch (err) {
        return res.status(401).json({ message: 'Не авторизований' })
    }
}