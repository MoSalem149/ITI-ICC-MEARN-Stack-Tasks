import mongoose from "mongoose";

// TODO: Define the Collection schema with the following fields:
//   - name: String (required, trimmed)
//   - owner: ObjectId reference to "User" model
//   - timestamps: true (createdAt, updatedAt)
const collectionSchema = new mongoose.Schema(
  {
    // TODO: add schema fields here
    name: { type: String, required: true, trim: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Collection", collectionSchema);
