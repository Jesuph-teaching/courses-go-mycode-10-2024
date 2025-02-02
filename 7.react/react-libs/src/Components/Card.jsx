import popupEvents from "../events/popupsEvents";

export default function Card({ id, name, bio }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{bio}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              popupEvents.emit("open", { id: id, action: "delete-user" });
            }}
          >
            Delete this
          </button>
        </div>
      </div>
    </div>
  );
}
