// vendors
import { SWRConfig } from "swr";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

// configs
import { apiFetcher } from "configs/apiFetcher.config";

// routes
import { Routes } from "routes";

function App() {
	return (
		<Suspense fallback={<div>Loading App...</div>}>
			<SWRConfig value={{ fetcher: apiFetcher }}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</SWRConfig>
		</Suspense>
	);
}

export default App;
