import { ErrorBoundary } from "react-error-boundary";
import AppRouter from "@/routers";
import { ThemeProvider } from "@/contexts/theme-context";
import ErrorFallback from "@/components/common/error-page";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;