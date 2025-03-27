import { useProducts } from "../hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import { Box, Grid } from "@mui/material";

interface IProduct {
  id: string;
  images: string;
  title: string;
  price: string;
  category: {
    name: string;
  };
}

export default function ProductList() {
  const { data: products, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  if (isLoading) {
    return (
      <p
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        加载中...
      </p>
    );
  }

  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {products?.map((product: IProduct) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={product.id}
            style={{ width: "300px" }}
          >
            <ProductCard
              product={product}
              onSelect={() => setSearchParams({ product: product.id })}
              isSelected={
                Number(searchParams.get("product")) === Number(product.id)
              }
            />
          </Grid>
        ))}
      </Grid>

      {/* 右侧栏：详情展示 */}
      {searchParams.get("product") && (
        <ProductDetail productId={Number(searchParams.get("product"))} />
      )}
    </Box>
  );
}
