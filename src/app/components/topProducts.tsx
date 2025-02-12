"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";

interface ProductData {
  product: string;
  sold_amount: number;
  unit_price: number;
  revenue: number;
  rating: number;
}

export default function TopProducts() {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const tableCellStyle = {
    fontFamily: "Lato, sans-serif",
    fontSize: "0.8rem",
    padding: "0.2rem !important",
    paddingX: "16px !important",
  };

  return (
    <Box width={"100%"}>
      <CardContent
        sx={{
          padding: "0 !important",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, sans-serif",
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "0.8rem",
          }}
        >
          Top Products
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableCellStyle}>Product</TableCell>
              <TableCell sx={tableCellStyle}>Sold amount</TableCell>
              <TableCell sx={tableCellStyle}>Unit price</TableCell>
              <TableCell sx={tableCellStyle}>Revenue</TableCell>
              <TableCell sx={tableCellStyle}>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.product}>
                <TableCell
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "600",
                    paddingY: "12px !important",
                    borderBottom: "none",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={`/assets/${product.product}.png`}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                  {product.product}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    paddingY: "12px !important",
                    borderBottom: "none",
                  }}
                >
                  {product.sold_amount}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    paddingY: "12px !important",
                    borderBottom: "none",
                  }}
                >
                  {product.unit_price}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    paddingY: "12px !important",
                    borderBottom: "none",
                  }}
                >
                  {product.revenue}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "600",
                    paddingY: "10px !important",
                    borderBottom: "none",
                    display: "flex",
                    gap: "0.4rem",
                  }}
                >
                  <StarIcon fontSize="small" sx={{ color: "#F0A551" }} />
                  {product.rating}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Box>
  );
}
