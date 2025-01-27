import { Schema, model } from "mongoose";

const rentHistorySchema = new Schema(
  {
    bookId: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    memberId: { type: Schema.Types.ObjectId, ref: "Member", required: true },
    workerId: { type: Schema.Types.ObjectId, ref: "Worker", required: true },
    duration: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const rentHistoryModel = model("RentHistory", rentHistorySchema);

export default rentHistoryModel;
