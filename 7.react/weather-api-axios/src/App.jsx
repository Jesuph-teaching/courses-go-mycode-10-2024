import { useEffect, useState } from "react";
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import toast, { Toaster } from "react-hot-toast";
import WeatherCard from "./Components/WeatherCard";
import useAuth from "./hooks/useAuth";
import { myAPIConfig } from "./api/axios-configurations";
import TodosCard from "./Components/Todos/TodosCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const authTabs = [
  {
    name: "Login",
    Component: LoginForm,
  },
  {
    name: "Registration",
    Component: RegistrationForm,
  },
];
const loggedTabs = [
  {
    name: "Todos",
    Component: TodosCard,
  },
  {
    name: "Weather",
    Component: WeatherCard,
  },
];
function App() {
  const [isLoggedIn, CheckAuth] = useAuth();

  const tabs = isLoggedIn ? loggedTabs : authTabs;
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const Component = tabs.find((tab) => tab.name === activeTab)?.Component;
  useEffect(() => {
    setActiveTab(tabs[0].name);
  }, [tabs]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center w-full relative">
        <div role="tablist" className="tabs tabs-box">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              role="tab"
              className={"tab " + (activeTab === tab.name ? "tab-active" : "")}
              onClick={() => {
                setActiveTab(tab.name);
              }}
            >
              {tab.name}
            </a>
          ))}
        </div>
        {isLoggedIn ? (
          <button
            onClick={async () => {
              try {
                const response = await myAPIConfig.delete("/auth");
                if (response.status === 200) {
                  toast.success("You have logged out , bye bye!");
                  await CheckAuth();
                }
              } catch (e) {
                toast.error(e.message);
              }
            }}
            className="btn btn-circle absolute top-4 right-4"
          >
            ❌
          </button>
        ) : null}
      </div>

      {Component ? <Component /> : null}
      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
