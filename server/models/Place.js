import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Place', PlaceSchema)

