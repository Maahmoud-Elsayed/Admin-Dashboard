
import { Box, Paper } from "@mui/material";
import Header from "../components/ui/Header";
import PieChart from "../components/charts/PieChart";
const PiePage = () => {
  return (
    <Box>
      <Header title="PIE CHART" description="Simple Pie Chart" />
      <Paper
        sx={{ height: "75vh", width: "100%", position: "relative", mt: "40px" }}
      >
        <Box sx={{ height: "100%", width: "100%", position: "absolute" }}>
          <PieChart />
        </Box>
      </Paper>
    </Box>
  );
}


export default PiePage