import  mongoose  from 'mongoose';

const { String } = mongoose.Schema.Types;

const TableSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true
    },
    columns: {
        type: Number,
        reqired: true
    },
    rows: {
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

export default mongoose.models.Sheet || mongoose.model("Sheet", TableSchema)