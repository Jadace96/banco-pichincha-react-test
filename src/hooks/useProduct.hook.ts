// vendors
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

// api
import api from "api";
import { PATHS } from "consts/paths.const";
import { useEffect } from "react";

export const useProduct = () => {
  const navigate = useNavigate();

  const { isFetching, data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.fetcher(api.paths.PRODUCTS),
  });

  const createProductMutation = useMutation({
    mutationFn: (body: BodyInit) => api.fetcher(api.paths.PRODUCTS, { method: "POST", body }),
  });

  useEffect(() => {
    createProductMutation.isSuccess && navigate(PATHS.PRODUCTS);
  }, [createProductMutation.isSuccess]);

  return { products, isFetchingProducts: isFetching, createProductMutation };
};
