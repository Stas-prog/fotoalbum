import * as  uuid from 'uuid'
import * as  path from 'path'
import ApiError from '../error/ApiError.js'
import FotoModel from '../models/Foto.js'

class FotoController {
    async create(req, res, next) {
        try {
            const placeId = req.body.placeId
            const yearId = req.body.yearId
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve('static', fileName))
            const foto = await FotoModel.create({ date: yearId, name: placeId, img: fileName })
            return res.json(foto)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res, next) {
        try {
            const yearId = req.query.yearId
            const placeId = req.query.placeId
            const page = req.query.page || 0
            const limit = req.query.limit || 2

            let fotos
            if (!yearId && !placeId) {
                fotos = await FotoModel.find().skip(page * limit).limit(limit)
            }
            if (yearId && !placeId) {
                fotos = await FotoModel.find({ date: yearId }).skip(page * limit).limit(limit)
            }
            if (!yearId && placeId) {
                fotos = await FotoModel.find({ name: placeId }).skip(page * limit).limit(limit)
            }
            if (yearId && placeId) {
                fotos = await FotoModel.find({ date: yearId, name: placeId }).skip(page * limit).limit(limit)
            }
            return res.json(fotos)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res) {
        try {
            let fotoId = req.params.id
            const foto = await FotoModel.findOne({ _id: fotoId })
            return res.send(foto)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res) {
        try {
            let fotoId = req.params.id
            const foto = await FotoModel.deleteOne({ _id: fotoId })
            return res.json(foto)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

export default new FotoController()

// 'Update' syntax : db.collection.update(<query>,<update>)

// db.employees.update({"employee_id":2},{"name":"Employee2"})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

// db.employees.save({"employee_id":1,"name":"Sanjeev"})
// WriteResult({ "nInserted" : 1 })

// db.employees.find()
// { "_id" : ObjectId("579c6efbb87b4b49be12664d"), "employee_id" : 1, "name" : "Sanjeev" }