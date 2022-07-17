import mongoose from 'mongoose'
const { Schema } = mongoose

const commentSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: Date,
    user: { type: Schema.Types.ObjectId, ref: "User"  }
  });

export const Comment = mongoose.model('Comment', commentSchema);