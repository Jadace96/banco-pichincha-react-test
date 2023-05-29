// vendors
import api from "api";

export const fetcher = (url: string, init?: RequestInit) =>
  fetch(`${api.paths.BASE}${url}`, {
    headers: { Accept: "application/json", authorId: "1031163309" },
    body: init?.body,
  }).then((res) => res.json());
