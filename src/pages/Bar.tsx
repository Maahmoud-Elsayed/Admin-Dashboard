import { Box, Paper } from "@mui/material";
import Header from "../components/ui/Header";
import BarChart from "../components/charts/BarChart";


const BarPage = () => {
  return (
    <Box>
      <Header title="BAR CHART" description="Simple Bar Chart" />
      <Paper
        sx={{ height: "75vh", width: "100%", position: "relative", mt: "40px" }}
      >
        <Box sx={{ height: "100%", width: "100%", position: "absolute" }}>
          <BarChart />
        </Box>
      </Paper>
    </Box>
  );
}

export default BarPage