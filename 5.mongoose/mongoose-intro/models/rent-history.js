import { Schema, model } from "mongoose";

const rentHistorySchema = new Schema(
  {
    bookId: { type: Schema.Types.ObjectId, required: true },
    memberId: { type: Schema.Types.ObjectId, required: true },
    workerId: { type: Schema.Types.ObjectId, required: true },
    duration: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const rentHistoryModel = model("RentHistory", rentHistorySchema);

export default rentHistoryModel;
