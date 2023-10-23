import { Box, Paper } from "@mui/material";
import Header from "../components/ui/Header";
import GeoChart from "../components/charts/GeoChart";

const GeographyPage = () => {
  return (
    <Box >
      <Header title="PIE CHART" description="Simple Pie Chart" />
      <Paper sx={{ height: "75vh", width: "100%", position: "relative", mt:"40px" }}>
        <Box sx={{ height: "100%", width: "100%", position: "absolute" }}>
        <GeoChart />
        </Box>
      </Paper>
    </Box>
  );
}

export default GeographyPage