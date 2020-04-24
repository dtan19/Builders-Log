// import logs from '../../static/logs.json'
import Sheet from '../../models/Sheet';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    const sheets = await Sheet.find();
    res.status(200).json(sheets)
};