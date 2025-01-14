const AsyncHandler = require('express-async-handler')
const User = require('../Models/userModel')
const bcrypt = require('bcrypt')

const registerUser = AsyncHandler(async (req, res) => {
    const {
        f_name,
        l_name,
        email,
        password,
        dob,
        gender
    } = req.body;
    if (!f_name || !l_name || !email || !password || !dob || !gender) {
        res.status(400);
        throw new Error('Please enter all the respective fields');
    }

    const isUserPresent = await User.findOne({
        email
    })

    if (isUserPresent) {
        res.status(400)
        throw new Error('User already exists')
    } else {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const createdUser = await User.create({
            f_name,
            l_name,
            email,
            password: hashedPassword,
            dob,
            gender
        })
        res.send(createdUser)

    }


})

const loginUser = AsyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error('Please enter all the fields')
    }

    const checkUser = await User.findOne({
        email
    });
    if (!checkUser) {
        res.status(404);
        throw new Error('User not registered')
    } else {
        if (await bcrypt.compare(password, checkUser.password)) {
            res.send(checkUser)
        } else {
            res.status(401);
            throw new Error('Invalid Password');
        }
    }
})

module.exports = {
    registerUser,
    loginUser
}