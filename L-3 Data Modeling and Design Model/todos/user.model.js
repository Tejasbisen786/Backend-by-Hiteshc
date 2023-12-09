import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase,
    },
    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);


export const User= mongoose.model("User",UserSchema)