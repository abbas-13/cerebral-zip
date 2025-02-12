"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LegendProps,
} from "recharts";

interface SalesData {
  date: Date; // or Date if you want to convert it to a Date object
  web_sales: number;
  offline_sales: number;
}

export default function DeviceStats() {
  const [salesData, setSalesData] = useState<SalesData[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch("http://localhost:8000/api/sales");
      const data: SalesData[] = await response.json();
      setSalesData(data);
    };
    fetchStats();
  }, []);

  const CustomLegend: React.FC<LegendProps> = ({ payload }) => (
    <div className="flex justify-center">
      {payload?.map((entry, index) => (
        <div
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            color: "#4a4a4a",
            margin: "0 10px",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: entry.color,
              marginRight: 5,
            }}
          ></div>
          {entry.value === "web_sales" ? "Web Sales" : "Offline Sales"}
        </div>
      ))}
    </div>
  );

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: "0.7rem",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Lato, sans-serif", marginBottom: "2rem" }}
          gutterBottom
        >
          Customers by device
        </Typography>

        <LineChart
          height={180}
          width={300}
          style={{ marginLeft: "-20px" }}
          data={salesData}
        >
          <XAxis dataKey="Date" tick={false} axisLine={false} />
          <YAxis
            axisLine={false}
            tick={{ fontSize: 12 }}
            ticks={[0, 4000, 8000]}
            tickFormatter={(value) => `${value / 1000}k`}
            domain={[0, 8000]}
          />
          <CartesianGrid horizontal={true} vertical={false} stroke="#e0e0e0" />
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Line
            type="monotone"
            dot={false}
            dataKey="web_sales"
            stroke="#335AF1"
          />
          <Line
            type="monotone"
            dot={false}
            dataKey="offline_sales"
            stroke="#B6EAFD"
          />
        </LineChart>
      </CardContent>
    </Card>
  );
}
