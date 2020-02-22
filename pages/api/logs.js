// import logs from '../../static/logs.json'
import Log from '../../models/Log';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    const logs = await Log.find();
    res.status(200).json(logs)
};