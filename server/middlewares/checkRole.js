import jwt from "jsonwebtoken"
import { SECRET } from "../utils/consts.js"

export default function (role) {

    return function (req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({ message: 'Не авторизований' })
            }
            const decoded = jwt.verify(token, SECRET)

            if (decoded.role !== role) {
                return res.status(403).json({ message: 'Немає доступу' })
            }

            req.user = decoded
            next()
        }
        catch (e) {
            return res.status(401).json({ message: 'Не авторизований' })
        }
    }
}