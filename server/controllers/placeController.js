import PlaceModel from '../models/Place.js'


class PlaceController {
    async create(req, res) {
        try {
            const { name } = req.body
            const place = await PlaceModel.create({ name })
            return res.json(place)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        try {
            const places = await PlaceModel.find()
            return res.json(places)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res) {
        try {
            let place = {}
            const placeId = req.params.id
            place = await PlaceModel.deleteOne({ _id: placeId })
            return res.send(place)
        } catch (err) {
            res.status(500).json({ message: 'Не вдалося видалити' })
        }
    }
}
export default new PlaceController()