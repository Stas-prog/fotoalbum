import mongoose from "mongoose";

const FotoSchema = new mongoose.Schema(
    {
        img: String,

        date: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Year',
        },
        name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Place',
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Foto', FotoSchema)

