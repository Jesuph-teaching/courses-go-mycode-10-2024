export default function Question({
  onAgree,
  onDisagree,
}: {
  onAgree: () => void;
  onDisagree: () => void;
}) {
  return (
    <>
      {" "}
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click on ✕ button to close</p>
      <div className="flex justify-end gap-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            onAgree();
          }}
        >
          yes
        </button>
        <button
          className="btn "
          onClick={() => {
            onDisagree();
          }}
        >
          no
        </button>
      </div>
    </>
  );
}
