import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col h-full">
			<Navbar />
			<div className="flex gap-4 h-full">
				<aside className="w-1/3 h-full border-r">
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
				<div className="w-2/3 h-full">{children}</div>
			</div>
		</div>
	);
}
