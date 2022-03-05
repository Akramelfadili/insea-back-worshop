import pkg from 'mongoose'
const { Schema } = pkg

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { collection: 'user', timestamps: true }, )

UserSchema.index({ email: 1 }, { unique: true })

export const User = model('User', UserSchema)