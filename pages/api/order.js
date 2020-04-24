import Order from '../../models/Order'
import connectDb from "../../utils/connectDb";
import jwt from 'jsonwebtoken';
import User from '../../models/User';


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
    const order = await Order.findOne({ _id })
    res.status(200).json(order)
}

async function handlePostRequest(req, res) {
    const { mediaUrl, name, phone, email, notes, orderStatus, total } = req.body
    try {
        // 1) Verify and get user id from token
        //const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        if ( !name || !phone || !email || !orderStatus || !total ) {
            return res.status(422).send("order missing one or more fields");
        }
        const order = await new Order({
            name,
            phone,
            email,
            notes,
            orderStatus,
            total,
            mediaUrl
        }).save();
        res.status(201).json(order);
    } catch(error) {
        console.error(error);
        res.status(500).send("Server failed to create order.")
    }
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query
    await Order.findOneAndDelete({ _id })
    res.status(204).json({})
}
//export default async (req, res) => {
//    const { _id } = req.query
//    const product = await Product.findOne({ _id })
//    res.status(200).json(product)
//};

