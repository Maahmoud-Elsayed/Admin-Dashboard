import {
  Box,
  Stack,
} from "@mui/material";
import StatBox from "../components/home/StatBox";
import Button from "@mui/material/Button";
import Header from "../components/ui/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Grid from "@mui/material/Grid";
import Transactions from "../components/home/Transactions";
import SectionContainer from "../components/home/SectionContainer";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import BarChart from "../components/charts/BarChart";
import GeoChart from "../components/charts/GeoChart";

const statBoxData = [
  {
    title: "Emails Sent",
    subtitle: "12,361",
    progress: 70,
    increase: "25%",
    icon: <EmailIcon fontSize="large" sx={{ color: "grey.200" }} />,
    up: true,
  },
  {
    title: "New Clients",
    subtitle: "32,441",
    progress: 50,
    increase: "5%",
    icon: <PersonAddIcon fontSize="large" sx={{ color: "grey.200" }} />,
    up: false,
  },
  {
    title: "Sales Obtained",
    subtitle: "431,225",
    progress: 85,
    increase: "40%",
    icon: <PointOfSaleIcon fontSize="large" sx={{ color: "grey.200" }} />,
    up: true,
  },
  {
    title: "Traffic Received",
    subtitle: "1,325,134",
    progress: 40,
    increase: "12%",
    icon: <TrafficIcon fontSize="large" sx={{ color: "grey.200" }} />,
    up: false,
  },
];

const HomePage = () => {
  return (
    <>
    {/* <SearchInput/> */}
      {/* header */}
      <Box
        display="flex"
        justifyContent="space-between"
        mb="40px"
        alignItems="start"
      >
        <Header title="DASHBOARD" description="Welcome to your dashboard" />
        <Button
          size="medium"
          variant="contained"
          sx={{alignSelf:"end"}}
          startIcon={<DownloadOutlinedIcon />}
        >
          Reports
        </Button>
      </Box>
      <Stack direction="column" spacing={1} ml={-2} mr={2} mt={-2}>
        {/* first row */}

        <Grid container rowSpacing={4} columnSpacing={2}>
          {statBoxData.map((box, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StatBox
                title={box.title}
                subtitle={box.subtitle}
                value={box.progress}
                increase={box.increase}
                icon={box.icon}
                up={box.up}
              />
            </Grid>
          ))}
        </Grid>

        {/* second row */}

        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12} md={8}>
            <SectionContainer
              title="Revenue Generated"
              subTitle="$59,342.32"
              height="271px"
            >
              <LineChart isDashboard={true} />
            </SectionContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Transactions />
          </Grid>
        </Grid>

        {/* third row */}
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <SectionContainer
              title="Campaign"
              subTitle="$48,352"
              height="272px"
            >
              <PieChart isDashboard={true} />
            </SectionContainer>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SectionContainer
              title="Sales Quantity"
              subTitle="$28,167"
              height="272px"
            >
              <BarChart isDashboard={true} />
            </SectionContainer>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SectionContainer title="Geography Based Traffic" height="289px">
              <GeoChart isDashboard={true} />
            </SectionContainer>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default HomePage;
