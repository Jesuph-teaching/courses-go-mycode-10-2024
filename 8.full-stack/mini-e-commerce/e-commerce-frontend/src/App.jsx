import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

import Routers from "./Routers";
import Navbar from "./components/Navbar";
import CartProvider from "./providers/CartProvider";

const queryClient = new QueryClient();
function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<UserProvider>
					<CartProvider>
						<BrowserRouter>
							<Navbar />
							<Routers />
						</BrowserRouter>
					</CartProvider>
				</UserProvider>
			</QueryClientProvider>
			<Toaster />
		</>
	);
}

export default App;
