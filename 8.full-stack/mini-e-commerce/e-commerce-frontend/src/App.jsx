import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "./providers/UserProvider";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Layout>
          <LoginForm />
        </Layout>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
