import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Routers from "./Routers";
import store from "./app/store";
import Authenticator from "./providers/Authenticator";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Authenticator>
            <BrowserRouter>
              <Routers />
            </BrowserRouter>
          </Authenticator>
        </Provider>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
