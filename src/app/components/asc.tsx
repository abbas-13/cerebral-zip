import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function ComparisonChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your SQL database here
    // This would be an API endpoint that queries your comparison_data table
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Comparison
        </Typography>
        <LineChart width={700} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="thisYear" stroke="#8884d8" />
          <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
