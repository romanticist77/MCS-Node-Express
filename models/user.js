import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, uniqueCaseInsentive: true, trim: true},
    email: {type: String, required: true, unique: true, uniqueCaseInsentive: true, trim: true, index: true},
    hashed_password: {type: String, required: true},
    name: {type: String},
    surname: {type: String}
  });

  userSchema.plugin(uniqueValidator);

export const User = mongoose.model('User', userSchema);