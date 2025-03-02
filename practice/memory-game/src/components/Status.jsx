import PropTypes from "prop-types";

function Status({ icon, title, value }) {
  return (
    <div className="flex items-center">
      <div className="rounded-full p-3 bg-white z-10 -mr-4 shadow-xl border border-black/10">
        <img src={icon} alt={title} />
      </div>
      <p className="rounded-full py-1 px-10 bg-white shadow-xl border border-black/10">
        {title}: {value}
      </p>
    </div>
  );
}

Status.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Status;
