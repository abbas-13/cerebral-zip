import { Grid2 as Grid } from "@mui/material";
import AppShell from "@/app/components/appshell";
import MetricsCards from "@/app/components/metrics";
import ComparisonChart from "@/app/components/asc";
import PerformanceGauge from "@/app/components/performanceScore";
import DeviceStats from "@/app/components/salesType";
import CommunityFeedback from "@/app/components/communityFeedback";
import TopProducts from "@/app/components/topProducts";

export default function Dashboard() {
  return (
    <AppShell>
      <Grid container spacing={3}>
        <Grid size={{ xs: 6, md: 8 }}>
          <MetricsCards />
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <ComparisonChart />
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <PerformanceGauge />
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <TopProducts />
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <DeviceStats />
          <CommunityFeedback />
        </Grid>
      </Grid>
    </AppShell>
  );
}
