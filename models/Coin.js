import  mongoose  from 'mongoose';

const { String } = mongoose.Schema.Types;

const CoinSchema = new mongoose.Schema({
    year: {
        type: Number,
        reqired: true
    },
    mint: {
        type: String,
        required: false
    },
    era: {
        type: String,
        required: false
    },
    grade: {
        type: String,
        required: false
    },
    index: {
        type: Number,
        required: true
    },
    mediaUrl: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

export default mongoose.models.Coin || mongoose.model("Coin", CoinSchema)