import CartPopup from "./CartPopup";
import UserDrop from "./UserDrop";

export default function Navbar() {
	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl" href="/">
					Mini E-COMMERCE
				</a>
			</div>
			<div className="flex gap-4">
				<CartPopup />
				<UserDrop />
			</div>
		</div>
	);
}
