import Coin from '../../models/Coin';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    const coins = await Coin.find();
    res.status(200).json(coins)
};