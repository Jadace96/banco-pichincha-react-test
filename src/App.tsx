// vendors
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// routes
import { Routes } from "routes";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading App...</div>}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
