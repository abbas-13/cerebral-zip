"use client";

import {
  CardContent,
  Typography,
  Grid2 as Grid,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";

import { fetchData } from "@/app/utils/api";

export default function MetricsCards() {
  const [metrics, setMetrics] = useState(null);
  const [timePeriod, setTimePeriod] = useState("6 months");

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(1);
        setMetrics(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTimePeriod(event.target.value);
  };

  return (
    <Box width={"100%"}>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          sx={{
            fontFamily: "Lato, sans-serif",
            fontWeight: "600",
            fontSize: "1.6rem",
            marginY: "1rem",
            marginBottom: "1rem",
          }}
        >
          Dashboard
        </Typography>
        <FormControl size="small">
          <Select
            onChange={handleChange}
            value={timePeriod}
            sx={{
              borderRadius: "50px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#e5e7eb",
              fontFamily: "Lato, sans-serif",
              fontSize: "14px",
              height: "30px",
              padding: "0",
            }}
          >
            <MenuItem value="6 months">Last year</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container justifyContent={"space-between"} spacing={-3}>
        {metrics &&
          Object.entries(metrics).map(([key, value]) => (
            <Grid size={{ xs: 12, md: 3.5 }} key={key}>
              <div className="border rounded-xl">
                <CardContent
                  sx={{
                    padding: "6px",
                    paddingX: "12px",
                    paddingBottom: "6px !important",
                  }}
                >
                  <Typography
                    sx={{ fontFamily: "Lato, sans-serif", fontSize: "0.75rem" }}
                    component="div"
                  >
                    {key}
                  </Typography>
                  <Typography
                    fontWeight={600}
                    sx={{ fontFamily: "Lato, sans-serif" }}
                    variant="h6"
                  >
                    {key === "revenue" ||
                    (key === "refunds" && typeof value === "number")
                      ? `$${value?.toLocaleString()}`
                      : String(value)}
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
