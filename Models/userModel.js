const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    f_name: {
        type: String,
        required: [true, 'please enter name']
    },
    l_name: {
        type: String,
        required: [true, 'please enter name']
    },
    email: {
        type: String,
        required: [true, 'please enter email']
    },
    password: {
        type: String,
        required: [true, 'please enter password']
    },
    dob: {
        type: String,
        required: [true, 'please enter DOB']
    },
    gender: {
        type: String,
        required: [true, 'please enter gender']
    },
    image: {
        type: String,
        required: false,
        default: null,
    },
    about: {
        type: String,
        required: false,
        default: "Hey there! I'm using whatsapp👋"
    },
    status: {
        type: Array,
        required: false,
        default: []
    },
    chatTheme: {
        type: String,
        required: false,
        default: 'https://i.pinimg.com/736x/6a/0b/d1/6a0bd1a083263f84c0ec5b40299cecea.jpg'
    },
    active: {
        type: Boolean,
        default: 0
    },
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)