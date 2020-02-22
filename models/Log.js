import  mongoose  from 'mongoose';

const { String } = mongoose.Schema.Types;

const LogSchema = new mongoose.Schema({
    mediaUrl: {
        type: String,
    },
    date: {
        type: Date,
        reqired: true
    },
    hours: {
        type: Number,
    },
    description: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    }
});

export default mongoose.models.Log || mongoose.model("Log", LogSchema)