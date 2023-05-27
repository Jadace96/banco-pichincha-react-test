// vendors
import ReactDOM from "react-dom/client";
import { Suspense, StrictMode } from "react";
import { SWRConfig } from "swr";
import { BrowserRouter } from "react-router-dom";

// reports
import reportWebVitals from "./reportWebVitals";

// configs
import { apiFetcher } from "configs/apiFetcher.config";

// components
import App from "./App";

// styles
import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<StrictMode>
		<Suspense fallback={<div>Loading App...</div>}>
			<SWRConfig value={{ fetcher: apiFetcher }}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</SWRConfig>
		</Suspense>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
