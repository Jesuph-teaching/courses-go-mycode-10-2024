import { EventEmitter } from "events";
export type ModelsDataTuples =
  | ["add-product", null]
  | ["edit-product", ProductI]
  | ["edit-order", OrderI]
  | ["delete-product", string]
  | ["delete-order", string];
export type ModelsDataT = {
  event: ModelsDataTuples[0];
  data: ModelsDataTuples[1];
};
type PopupEventsT = {
  open: ModelsDataTuples;
  close: [boolean];
};
const popupEvents = new EventEmitter<PopupEventsT>();

export default popupEvents;
