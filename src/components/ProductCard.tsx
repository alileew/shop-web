import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface IProduct {
  images: string;
  title: string;
  price: string;
  category: {
    name: string;
  };
}

export default function ProductCard({
  product,
  onSelect,
  isSelected,
}: {
  product: IProduct;
  onSelect: () => void;
  isSelected: boolean;
}) {
  return (
    <Card
      onClick={() => onSelect()}
      sx={{
        cursor: "pointer",
        "&:hover": {
          border: "1px solid rgba(0, 0, 255, 0.5)",
          boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.5)",
        },
        border: isSelected
          ? "1px solid rgba(0, 0, 255, 0.5)"
          : "1px solid #ddd", // 选中高亮
        boxShadow: isSelected ? "0 0 10px rgba(0, 0, 255, 0.5)" : "none", // 增强视觉效果
      }}
    >
      <CardMedia component="img" height="140" image={product.images[0]} />
      <CardContent>
        <Typography variant="h6" noWrap>
          {product.title}
        </Typography>
        <Typography color="text.secondary">{product.category.name}</Typography>
        <Typography color="text.secondary">${product.price}</Typography>
      </CardContent>
    </Card>
  );
}
