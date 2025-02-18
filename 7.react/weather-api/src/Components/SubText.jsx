import { useState } from "react";

export default function SubText() {
  const [txt, setTxt] = useState("");
  const [limit, setLimit] = useState(5);
  const subTxt = txt.substring(0, limit);

  return (
    <div>
      <form action="">
        <input
          className="input input-info"
          type="text"
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
          }}
        />
        <input
          className="input input-ghost"
          type="number"
          value={limit}
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        />

        <p className="bg-amber-500 w-full">{subTxt}</p>
      </form>
    </div>
  );
}
