import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'
import { SECRET } from '../utils/consts.js'
import ApiError from '../error/ApiError.js'

function generateJwt(_id, email, role) {
    return jwt.sign(
        { _id, email, role },
        SECRET,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        try {
            let { email, password, role } = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Не коректний email або password'))
            }
            const candidate = await UserModel.findOne({ email })
            if (candidate) {
                return next(ApiError.badRequest('Такий користувач вже існує'))
            }
            const salt = await bcrypt.genSalt(5)
            const passHash = await bcrypt.hash(password, salt)
            const doc = new UserModel({
                email,
                role,
                passHash
            })

            const user = await doc.save()
            const token = generateJwt(user._id, user.email, user.role)
            return res.json({ token })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            let { email, password } = req.body

            const user = await UserModel.findOne({ email })
            if (!user) {
                return next(ApiError.badRequest('Не коректний email або password'))
            }
            const comparePassword = await bcrypt.compare(password, user.passHash)

            if (!comparePassword) {
                return next(ApiError.badRequest('Не коректний email або password'))
            }
            const token = generateJwt(user._id, user.email, user.role)
            return res.json({ token })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async check(req, res) {
        try {
            const token = generateJwt(req.user._id, req.user.email, req.user.role)
            return res.json({ token })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

export default new UserController()