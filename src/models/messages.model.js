import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    messageText: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

export const messagesModel = mongoose.model('Messages', messagesSchema)