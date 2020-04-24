import Coin from '../../models/Coin'
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
    const coin = await Coin.findOne({ _id })
    res.status(200).json(coin)
}

async function handlePostRequest(req, res) {
    const { mediaUrl, year, mint, era, grade, index } = req.body
    try {
        if ( !year || !index || !mediaUrl ) {
            return res.status(422).send("missing one or more fields");
        }
        const coin = await new Coin({
            year,
            mint,
            era,
            grade,
            index,
            mediaUrl
        }).save();
        res.status(201).json(coin);
        console.log(coin);
    } catch(error) {
        console.error(error);
        res.status(500).send("Server failed to create sheet.")
    }
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query
    await Coin.findOneAndDelete({ _id })
    res.status(204).json({})
}

