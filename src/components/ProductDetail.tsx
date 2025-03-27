import { useProductDetail } from "../hooks/useProducts";
import { Drawer, Box, Typography, Button, CardMedia } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function ProductDetail({ productId }: { productId: number }) {
  const { data: product, isLoading } = useProductDetail(productId);
  const [, setSearchParams] = useSearchParams();

  if (isLoading) return null;

  return (
    <Drawer
      anchor="right"
      open={!!productId}
      onClose={() => setSearchParams({})}
    >
      <Box p={3} width={350}>
        <Typography variant="h5">{product.title}</Typography>
        {product.images.map((img: string) => {
          return (
            <CardMedia key={img} component="img" height="140" image={img} />
          );
        })}
        <Typography>{product.category.name}</Typography>
        <Typography>{product.price}</Typography>
        <Typography color="text.secondary">{product.description}</Typography>

        <Button onClick={() => setSearchParams({})} fullWidth>
          关闭
        </Button>
      </Box>
    </Drawer>
  );
}
