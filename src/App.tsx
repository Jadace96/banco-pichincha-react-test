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
    <Suspense fallback={<div>Loading App...</div>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
