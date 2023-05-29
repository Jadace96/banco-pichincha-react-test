// vendors
import { useQuery } from "@tanstack/react-query";

// api
import api from "api";

export const useProduct = () => {
  const { isFetching, data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.fetcher(api.paths.PRODUCTS),
    staleTime: 1000 * 60 * 60, // 1h
  });

  return { products, isFetchingProducts: isFetching };
};
