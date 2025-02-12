import MetricsCards from "./metrics";
import ComparisonChart from "./comparison";
import TopProducts from "./topProducts";
import { Grid2 } from "@mui/material";

export const Dashboard = () => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        border: "0px",
        borderRadius: "12px",
        height: "100%",
        backgroundColor: "#FFFFFF",
        padding: "0 1rem",
      }}
    >
      <MetricsCards />
      <ComparisonChart />
      <TopProducts />
    </Grid2>
  );
};
