import mongoose, { Schema, model, models } from "mongoose";
import { tareasSchema } from "./tareas";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
    },
    fullname: {
        type: String,
        required: [true, "Fullname is required"],
        minLength: [4, "Fullname must be at least 4 characters"],
        maxLength: [40, "Fullname must be at most 40 characters"],
    },
    tareas: [tareasSchema],
});

const User = models.User || model("User", userSchema);

export default User;
