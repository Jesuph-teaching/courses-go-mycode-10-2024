import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "./providers/UserProvider";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Layout>
            <LoginForm />
          </Layout>
        </UserProvider>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
