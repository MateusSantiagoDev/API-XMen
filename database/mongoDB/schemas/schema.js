import { Schema, model } from "mongoose";

const characterSchema = new Schema({
    id: { type: String, required: true},
    name: { type: String, required: true},
    ability: { type: String, required: true},
    origin: { type: String, required: true},
    image1: { type: String, required: true},
    image2: { type: String, required: true},
});

export const characterModel = model("character", characterSchema);
