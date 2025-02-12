"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  LegendProps,
  ResponsiveContainer,
} from "recharts";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";

interface ComparisonData {
  Month: string;
  Last_year: number;
  This_year: number;
}

export default function ComparisonChart() {
  const [comparisonData, setComparisonData] = useState<ComparisonData[]>([]);
  const [timePeriod, setTimePeriod] = useState<string>("6 months");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL}/api/sales_comparison`
        );
        const data: ComparisonData[] = await response.json();
        setComparisonData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTimePeriod(event.target.value);
  };

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
          {entry.value === "Last_year" ? "Last Year" : "This Year"}
        </div>
      ))}
    </div>
  );

  return (
    <Box width={"100%"}>
      <div className="flex justify-between items-center mb-4">
        <Typography
          sx={{
            fontFamily: "Lato, sans-serif",
            marginY: "0.5rem",
            fontSize: "1.1rem",
            fontWeight: "600",
          }}
        >
          Comparison
        </Typography>
        <FormControl size="small">
          <Select
            value={timePeriod}
            sx={{
              borderRadius: "50px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#e5e7eb",
              fontSize: "14px",
              height: "30px",
              fontFamily: "Lato, sans-serif",
              padding: "0",
            }}
            onChange={handleChange}
          >
            <MenuItem value="6 months">6 months</MenuItem>
            <MenuItem value="12 months">12 months</MenuItem>
            <MenuItem value="24 months">24 months</MenuItem>
          </Select>
        </FormControl>
      </div>
      <ResponsiveContainer width="100%" height="75%">
        <BarChart data={comparisonData}>
          <CartesianGrid horizontal={true} vertical={false} stroke="#ECECEC" />
          <XAxis tick={{ fontSize: 12 }} dataKey="Month" axisLine={false} />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            tick={{ fontSize: 12 }}
            domain={[0, 40000]}
            axisLine={false}
          />
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Bar dataKey="Last_year" fill="#B6EAFD" barSize={20} />
          <Bar dataKey="This_year" fill="#335AF1" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
