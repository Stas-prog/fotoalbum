import ApiError from '../error/ApiError.js'

export default function (err, res) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }
    return res.status(500).json({ message: 'Не передбачена помилка' })
}