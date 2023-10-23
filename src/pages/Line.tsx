import { Box, Paper } from "@mui/material";
import Header from "../components/ui/Header";
import LineChart from "../components/charts/LineChart";

const LinePage = () => {
  return (
    <Box>
      <Header title="PIE CHART" description="Simple Pie Chart" />
      <Paper
        sx={{ height: "75vh", width: "100%", position: "relative", mt: "40px" }}
      >
        <Box sx={{ height: "100%", width: "100%", position: "absolute" }}>
          <LineChart />
        </Box>
      </Paper>
    </Box>
  );
};

export default LinePage;
