import { Grid2 as Grid } from "@mui/material";
import AppShell from "@/app/components/appshell";
import PerformanceGauge from "@/app/components/performanceScore";
import DeviceStats from "@/app/components/salesType";
import CommunityFeedback from "@/app/components/communityFeedback";
import { Dashboard } from "../components/dashboard";

export default function HomePage() {
  return (
    <AppShell>
      <Grid container spacing={1} sx={{ width: "100%" }}>
        <Grid size={{ xs: 6, md: 8.5 }}>
          <Dashboard />
        </Grid>
        <Grid container direction="row" spacing={1} size={{ md: 3.5 }}>
          <PerformanceGauge />
          <DeviceStats />
          <CommunityFeedback />
        </Grid>
      </Grid>
    </AppShell>
  );
}
