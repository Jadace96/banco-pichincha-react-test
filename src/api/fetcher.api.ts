// vendors
import api from "api";

export const fetcher = (url: string, init?: RequestInit) =>
  fetch(`${api.paths.BASE}${url}`, {
    method: init?.method || "GET",
    body: JSON.stringify(init?.body),
    headers: { "Content-type": "application/json", authorId: "1031163309", ...init?.headers },
  }).then((res) => res.json());
