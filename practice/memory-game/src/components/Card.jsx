import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Card({ image, onSelect, open, disabled }) {
  const [flip, setFlip] = useState(open);
  useEffect(() => {
    if (!open && flip) {
      const t = setTimeout(() => {
        setFlip(false);
      }, 1000);
      return () => {
        clearTimeout(t);
      };
    }
  }, [open, flip]);

  return (
    <div
      className="w-full aspect-square relative bg-white rounded-xl overflow-hidden"
      onClick={() => {
        if (!disabled && !open) {
          setFlip(true);
          onSelect();
        }
      }}
    >
      <img
        className="absolute w-full p-6 h-full top-0 left-0"
        src={image}
        alt="card-image"
      />
      <img
        className={
          "absolute w-full h-full top-0 left-0 transition-transform duration-500 " +
          (flip || open ? "rotate-y-90" : "rotate-y-0")
        }
        src={"/icons/card-front.svg"}
        alt="card-image"
      />
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
