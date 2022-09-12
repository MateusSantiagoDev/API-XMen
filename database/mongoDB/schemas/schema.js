import { Schema, model } from "mongoose";

const characterSchema = new Schema({
    id: { type: String, required: true},
    name: { type: String, required: true},
    ability: { type: String, required: true},
    image: { type: String, required: true},
});

export const characterModel = model("character", characterSchema);
