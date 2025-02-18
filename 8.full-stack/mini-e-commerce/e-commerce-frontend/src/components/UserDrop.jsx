import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function UserDrop() {
	const { user, isAdmin } = useSelector((store) => store.user);
	console.log(user, isAdmin);
	return (
		<div className="dropdown dropdown-end">
			<div
				tabIndex={0}
				role="button"
				className="btn btn-ghost btn-circle avatar"
			>
				<div className="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
					/>
				</div>
			</div>
			<ul
				tabIndex={0}
				className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
			>
				{user ? (
					<li>
						<a className="text-xl">
							{user.firstName} {user.lastName}
						</a>
					</li>
				) : null}
				<li>
					<a className="justify-between">
						Profile
						<span className="badge">New</span>
					</a>
				</li>

				{user ? (
					<li>
						<a
							onClick={() => {
								localStorage.removeItem("token");
								setUser(null);
							}}
						>
							Logout
						</a>
					</li>
				) : (
					<li>
						<Link to="/auth">Login</Link>
					</li>
				)}
			</ul>
		</div>
	);
}
