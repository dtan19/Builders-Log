import Sheet from '../../models/Sheet'
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
    const sheet = await Sheet.findOne({ _id })
    res.status(200).json(sheet)
}

async function handlePostRequest(req, res) {
    const { mediaUrl, name, columns, rows } = req.body
    try {
        if ( !name || !columns || !rows || !mediaUrl ) {
            return res.status(422).send("missing one or more fields");
        }
        const sheet = await new Sheet({
            name,
            columns,
            rows,
            mediaUrl
        }).save();
        res.status(201).json(sheet);
        console.log(sheet);
    } catch(error) {
        console.error(error);
        res.status(500).send("Server failed to create sheet.")
    }
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query
    await Sheet.findOneAndDelete({ _id })
    res.status(204).json({})
}
//export default async (req, res) => {
//    const { _id } = req.query
//    const product = await Product.findOne({ _id })
//    res.status(200).json(product)
//};

