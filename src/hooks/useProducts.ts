import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductDetail } from "../api/products";

// 获取商品列表
export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};

// 获取商品详情
export const useProductDetail = (productId: number | null) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => (productId ? fetchProductDetail(productId) : null),
    enabled: !!productId,
  });
};
