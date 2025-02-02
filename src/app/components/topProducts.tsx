import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function TopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your SQL database here
    // This would be an API endpoint that queries your products table
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top Products
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Sold amount</TableCell>
              <TableCell>Unit price</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.sold_amount}</TableCell>
                <TableCell>${product.unit_price}</TableCell>
                <TableCell>${product.revenue}</TableCell>
                <TableCell>{product.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
