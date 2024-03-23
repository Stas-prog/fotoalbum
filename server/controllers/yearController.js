import YearModel from '../models/Year.js'

class YearController {
    async create(req, res) {
        try {
            const doc = new YearModel(
                { date: req.body.date }
            )
            const year = await doc.save()
            return res.json(year)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


        // const { date } = req.body
        // const year = await YearModel.create({ year: date })
        // return res.json(year)
    }

    async getAll(req, res) {
        try {
            const years = await YearModel.find()
            return res.json(years)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res) {
        try {
            let year = {}
            const yearId = req.params.id
            year = await YearModel.deleteOne({ _id: yearId })
            return res.send(year)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Не вдалося видалити рік' })
        }

    }
}
export default new YearController()