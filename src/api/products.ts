const API_BASE = "https://api.escuelajs.co/api/v1/products";

// 商品列表
export const fetchProducts = async () => {
  const res = await fetch(`${API_BASE}?offset=0&limit=10`);
  return res.json();
};

// 商品详情
export const fetchProductDetail = async (id: number) => {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
};
