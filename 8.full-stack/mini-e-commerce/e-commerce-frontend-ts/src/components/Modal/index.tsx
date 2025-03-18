import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import popupEvents, { type ModelsDataT } from "@client/events/popupsEvents";
import Question from "./Question";
import EditOrder from "./EditOrder";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";

export default function Modal() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [actionInfo, setActionInfo] = useState<ModelsDataT | null>(null);
  const modelsToComponent: Record<
    ModelsDataT["event"],
    (data: ModelsDataT["data"]) => ReactNode
  > = useMemo(
    () => ({
      "delete-order": () => (
        <Question
          onAgree={() => {
            popupEvents.emit("close", true);
            modalRef.current?.close();
          }}
          onDisagree={() => {
            popupEvents.emit("close", false);
            modalRef.current?.close();
          }}
        />
      ),
      "delete-product": () => (
        <Question
          onAgree={() => {
            popupEvents.emit("close", true);
            modalRef.current?.close();
          }}
          onDisagree={() => {
            popupEvents.emit("close", false);
            modalRef.current?.close();
          }}
        />
      ),
      "edit-order": (data) => <EditOrder order={data as OrderI} />,
      "edit-product": (data) => (
        <EditProduct
          onDone={() => {
            popupEvents.emit("close", true);
            modalRef.current?.close();
          }}
          product={data as ProductI}
        />
      ),
      "add-product": () => (
        <AddProduct
          onDone={() => {
            popupEvents.emit("close", true);
            modalRef.current?.close();
          }}
        />
      ),
    }),
    [modalRef]
  );
  useEffect(() => {
    if (modalRef.current) {
      function popupHandler(
        event: ModelsDataT["event"],
        data: ModelsDataT["data"]
      ) {
        setActionInfo({
          event,
          data,
        } as ModelsDataT);
        modalRef.current!.showModal();
      }
      popupEvents.addListener("open", popupHandler);
      modalRef.current.addEventListener("close", () => {
        popupEvents.emit("close", true);
      });
      return () => {
        popupEvents.removeListener("open", popupHandler);
      };
    }
  }, [modalRef]);
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => {
              popupEvents.emit("close", false);
            }}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {actionInfo
          ? modelsToComponent[actionInfo.event](actionInfo.data)
          : null}
      </div>
    </dialog>
  );
}
