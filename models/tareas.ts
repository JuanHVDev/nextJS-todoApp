import mongoose, { Schema, model, models } from "mongoose";

export const tareasSchema = new Schema({
    titulo: { type: String, required: true },
    creado: { type: Date },
    completed: { type: Boolean },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Tarea = models.Tarea || model("Tarea", tareasSchema);

export default Tarea;
