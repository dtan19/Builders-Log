import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


connectDb;
console.log("DB Connected");

export default async (req, res) => {
    const { email, password } = req.body
    try {
        // 1) Check to see if a user exists  with provided email.
        const user = await User.findOne({ email }).select('+password')
        // 2) --if not, return error.
        if (!user) {
            return res.status(404).send("No user exists with that email.")
        }
        // 3) Check to see if users' password matches the one in the db.
        const passwordsMatch = await bcrypt.compare(password, user.password)
        // 4) --if not, generate token
        if (passwordsMatch) {
            const token = jwt.sign({ userId: user._id }, 
            process.env.JWT_SECRET, { expiresIn: '7d' })
        // 5) Send that token to the client
        res.status(200).json(token)
    } else {
        res.status(401).send("Password is incorrect.")
    }
} catch (error) {
    console.error(error)
    res.status(500).send("Error logging in user.")
    }
}