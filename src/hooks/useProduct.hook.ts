// vendors
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

// api
import api from "api";

// constants
import { PATHS } from "consts/paths.const";

export const useProduct = () => {
  const navigate = useNavigate();

  const {
    refetch,
    isFetching,
    data: products = [],
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.fetcher(api.paths.PRODUCTS),
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const createProductMutation = useMutation({
    mutationFn: (body: BodyInit) => api.fetcher(api.paths.PRODUCTS, { method: "POST", body }),
  });

  const updateProductMutation = useMutation({
    mutationFn: (body: BodyInit) => api.fetcher(api.paths.PRODUCTS, { method: "PUT", body }),
  });

  const deleteProductMutation = useMutation({
    mutationFn: (productId: string) =>
      api.fetcher(`${api.paths.PRODUCTS}?id=${productId}`, { method: "DELETE" }),
  });

  const checkProductIdMutation = useMutation({
    mutationFn: (productId: string) =>
      api.fetcher(`${api.paths.PRODUCT_VERIFICACION}?id=${productId}`),
  });

  useEffect(() => {
    createProductMutation.isSuccess && navigate(PATHS.PRODUCTS);
  }, [createProductMutation.isSuccess]);

  return {
    products,
    createProductMutation,
    updateProductMutation,
    deleteProductMutation,
    fetchProducts: refetch,
    checkProductIdMutation,
    isFetchingProducts: isFetching,
  };
};
