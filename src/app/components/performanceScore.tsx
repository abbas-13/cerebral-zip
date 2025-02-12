"use client";

import { useEffect, useState } from "react";
import { CardContent, Typography, Card, Grid2, Box } from "@mui/material";
import { fetchData } from "../utils/api";
import { SemiProgress } from "./semiProgress";

interface PerformanceData {
  message: string;
  score: number;
  title: string;
}

export default function PerformanceGauge() {
  const [performanceData, setPerformanceData] = useState<PerformanceData>();

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const data = await fetchData(3);
        setPerformanceData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPerformanceData();
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: "0.7rem",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <CardContent sx={{ paddingBottom: "0 !important" }}>
        <Grid2 container direction={"row"}>
          <Box className="w-full flex justify-center border-b-[1px] pb-4 mb-4">
            <SemiProgress value={performanceData ? performanceData.score : 0} />
          </Box>
          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontSize: "1rem",
            }}
            component="div"
          >
            {`${performanceData?.title}!` || ""}
          </Typography>
          <Typography
            sx={{ fontFamily: "Lato, sans-serif", fontSize: "0.9rem" }}
            component="div"
          >
            {`${performanceData?.message}!` || ""}
          </Typography>
        </Grid2>
      </CardContent>
    </Card>
  );
}
