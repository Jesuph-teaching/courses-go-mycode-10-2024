import { Outlet, useMatch } from "react-router";
import useUser from "../hooks/useUser";

export default function AuthLayout() {
	const isRegister = useMatch("/auth/register");
	const { user } = useUser();
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left max-w-xl">
					<p>{user ? JSON.stringify(user) : null}</p>
					<h1 className="text-5xl font-bold">
						{isRegister ? "Register now" : "Login now!"}
					</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}
