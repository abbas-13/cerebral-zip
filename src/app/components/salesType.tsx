import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fetchWithAuth } from "../services/api";

export default function DeviceStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await fetchWithAuth("/sample_assignment_api_4/");
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Customers by device
        </Typography>
        <LineChart width={400} height={200} data={stats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="web_sales" stroke="#8884d8" />
          <Line type="monotone" dataKey="offline_sales" stroke="#82ca9d" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
