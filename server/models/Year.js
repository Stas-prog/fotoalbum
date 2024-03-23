import mongoose from "mongoose";

const YearSchema = new mongoose.Schema(
    {
        date: { type: Number, required: true }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Year', YearSchema)

