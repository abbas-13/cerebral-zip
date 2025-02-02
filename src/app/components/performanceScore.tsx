import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { fetchWithAuth } from "../services/api";

export default function PerformanceGauge() {
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    const fetchPerformance = async () => {
      const data = await fetchWithAuth("/sample_assignment_api_3/");
      setPerformance(data);
    };
    fetchPerformance();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Performance Score
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress
            variant="determinate"
            value={performance?.score || 0}
            size={120}
          />
          <Typography
            variant="h4"
            component="div"
            sx={{ position: "absolute" }}
          >
            {performance?.score || 0}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
