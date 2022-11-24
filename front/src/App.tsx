import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import { AuthContextProvider } from "./providers/auth";

function App() {
  return (
    <AppProvider>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </AppProvider>
  );
}

export default App;
