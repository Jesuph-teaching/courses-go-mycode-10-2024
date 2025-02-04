import { useEffect, useRef } from "react";
import Star from "./Star";
import Status from "./Status";
import PropTypes from "prop-types";
function starsInterval(score, timer, flips) {
  if (timer === 0) return 0;
  const total = Math.max(0, score + timer - flips * 2);
  if (total <= 110 && total > 65) return 3;
  if (total <= 65 && total > 30) return 2;
  return 1;
}
export default function GamePopup({
  open,
  timer,
  score,
  flips,
  message,
  onReset,
}) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (open) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [open]);
  const stars = starsInterval(score, timer, flips);
  return (
    <dialog
      ref={dialogRef}
      className="flex justify-center items-center w-full h-full bg-transparent outline-none"
    >
      <div className="bg-white px-6 gap-4 rounded-2xl w-full max-w-3xl flex flex-col items-center">
        <img
          className="-mt-6 -mb-12 -translate-y-1/2"
          src="/icons/modal-icon.png"
        />
        <h1 className="text-3xl font-semibold text-red-900">{message}</h1>
        <div className="flex items-end gap-2">
          <Star filled={stars >= 1} size={"small"} />
          <Star filled={stars >= 3} size={"big"} />
          <Star filled={stars >= 2} size={"small"} />
        </div>
        <div className="flex gap-8">
          <Status icon="/icons/medal.svg" title="Score" value={score} />
          <Status icon="/icons/flip.svg" title="Flips" value={flips} />
        </div>
        <button
          className="-mb-6 cursor-pointer"
          onClick={() => {
            onReset();
          }}
        >
          <img src="/icons/refresh.svg" alt="" />
        </button>
      </div>
    </dialog>
  );
}

GamePopup.propTypes = {
  open: PropTypes.bool.isRequired,
  timer: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  flips: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};
