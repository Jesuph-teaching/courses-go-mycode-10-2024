import PropTypes from "prop-types";

export default function Star({ filled, size }) {
  return (
    <img
      src={filled ? "/icons/stars-filled.svg" : "/icons/stars-empty.svg"}
      className={size === "small" ? "w-24 mb-2" : "w-36"}
    />
  );
}

Star.propTypes = {
  filled: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
};
