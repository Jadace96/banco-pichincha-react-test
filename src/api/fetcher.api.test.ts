// eslint-disable-next-line
// @ts-nocheck

// api
import { fetcher } from "./fetcher.api";

describe("fetcher test suit", () => {
  const baseURL =
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros";

  const mockResponse = (status: number, data: { data: string }) => {
    return Promise.resolve({
      status,
      json: () => Promise.resolve(data),
    });
  };

  beforeEach(() => {
    jest.spyOn(window, "fetch");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Sends a GET request with the correct URL", async () => {
    const url = "/products";
    const responseData = { data: "response" };
    window.fetch.mockResolvedValue(mockResponse(200, responseData));

    const response = await fetcher(url);

    expect(window.fetch).toHaveBeenCalledWith(`${baseURL}${url}`, {
      method: "GET",
      body: undefined,
      headers: { "Content-type": "application/json", authorId: "1031163309" },
    });
    expect(response).toEqual(responseData);
  });

  it("Sends a POST request with the correct URL, body, and headers", async () => {
    const url = "/products";
    const requestData = { name: "John", age: 30 };
    const responseData = { data: "response" };
    window.fetch.mockResolvedValue(mockResponse(200, responseData));

    const response = await fetcher(url, { method: "POST", body: requestData });

    expect(window.fetch).toHaveBeenCalledWith(`${baseURL}${url}`, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: { "Content-type": "application/json", authorId: "1031163309" },
    });
    expect(response).toEqual(responseData);
  });

  it("Sends a PUT request with the correct URL, body, and headers", async () => {
    const url = "/products";
    const requestData = { name: "John", age: 30 };
    const responseData = { data: "response" };
    window.fetch.mockResolvedValue(mockResponse(200, responseData));

    const response = await fetcher(url, { method: "PUT", body: requestData });

    expect(window.fetch).toHaveBeenCalledWith(`${baseURL}${url}`, {
      method: "PUT",
      body: JSON.stringify(requestData),
      headers: { "Content-type": "application/json", authorId: "1031163309" },
    });
    expect(response).toEqual(responseData);
  });

  it("Sends a DELETE request with the correct URL, body, and headers", async () => {
    const url = "/products";
    const responseData = { data: "response" };
    window.fetch.mockResolvedValue(mockResponse(200, responseData));

    const response = await fetcher(url, { method: "DELETE" });

    expect(window.fetch).toHaveBeenCalledWith(`${baseURL}${url}`, {
      method: "DELETE",
      body: undefined,
      headers: { "Content-type": "application/json", authorId: "1031163309" },
    });
    expect(response).toEqual(responseData);
  });
});
