import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../services/api";

export default function MetricsCards() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      const data = await fetchWithAuth("/sample_assignment_api_1/");
      setMetrics(data);
    };
    fetchMetrics();
  }, []);

  return (
    <Grid container spacing={2}>
      {metrics &&
        Object.entries(metrics).map(([key, value]) => (
          <Grid item xs={12} md={4} key={key}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {key}
                </Typography>
                <Typography variant="h4">
                  {typeof value === "number" ? value.toLocaleString() : value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
