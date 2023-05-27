export const apiFetcher = (resource: string, init?: RequestInit) =>
	fetch(resource, init).then((res) => res.json());
