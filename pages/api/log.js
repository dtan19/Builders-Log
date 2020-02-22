import Log from '../../models/Log'
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
};

async function handleGetRequest(req, res) {
    const { _id } = req.query
    const log = await Log.findOne({ _id })
    res.status(200).json(log)
}

async function handlePostRequest(req, res) {
    const { mediaUrl, date, hours, description, notes } = req.body
    try {
        if ( !date || !hours || !description || !notes || !mediaUrl ) {
            return res.status(422).send("log missing one or more fields");
        }
        const log = await new Log({
            date,
            hours,
            description,
            notes,
            mediaUrl
        }).save();
        res.status(201).json(log);
    } catch(error) {
        console.error(error);
        res.status(500).send("Server failed to create log.")
    }
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query
    await Log.findOneAndDelete({ _id })
    res.status(204).json({})
}
//export default async (req, res) => {
//    const { _id } = req.query
//    const product = await Product.findOne({ _id })
//    res.status(200).json(product)
//};

