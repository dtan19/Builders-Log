import  mongoose  from 'mongoose';

const { ObjectId, String, Number } = mongoose.Schema.Types;

const LogSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
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
    amount: {
        type: Number,
    },
    logType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    }
}, {
    timestamps: true
});

export default mongoose.models.Log || mongoose.model("Log", LogSchema)