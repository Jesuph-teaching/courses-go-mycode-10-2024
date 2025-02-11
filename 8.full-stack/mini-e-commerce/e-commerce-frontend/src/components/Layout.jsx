import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-red-500">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex gap-4">
          <aside className="w-1/3">
            <ul className="flex flex-col">
              <li className="btn btn-primary">
                <a href="">gfdsg</a>
              </li>
              <li className="btn btn-primary">
                <a href="">gdfgh</a>
              </li>
              <li className="btn btn-primary">
                <a href="">gfdgd</a>
              </li>
              <li className="btn btn-primary">
                <a href="">fdsgadfhg</a>
              </li>
              <li className="btn btn-primary">
                <a href="">fgsdfg</a>
              </li>
            </ul>
          </aside>
          <div className="w-2/3 bg-blue-500/50 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
