import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../../data/mockData";
import { useMediaQuery, useTheme } from "@mui/material";

type LineChartProps = {
  isDashboard?: boolean;
};

const LineChart = ({ isDashboard = false }: LineChartProps) => {
  const isLargeMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  return (
    <ResponsiveLine
      theme={{
        crosshair: {
          line: {
            stroke: `${theme.palette.text.primary}`,
            strokeWidth: 2,
            strokeOpacity: 0.3,
          },
        },
        axis: {
          domain: {
            line: {
              stroke: `${theme.palette.text.primary}`,
            },
          },
          legend: {
            text: {
              fill: `${theme.palette.text.primary}`,
            },
          },
          ticks: {
            line: {
              stroke: `${theme.palette.text.primary}`,
              strokeWidth: 1,
            },
            text: {
              fill: `${theme.palette.text.primary}`,
            },
          },
        },
        legends: {
          text: {
            fill: `${theme.palette.text.primary}`,
          },
          hidden: {
            text: {
              fill: `${theme.palette.error.main}`,
              opacity: 1,
            },
            symbol: { fill: "grey", opacity: 1 },
          },
        },
        tooltip: {
          container: {
            backgroundColor: theme.palette.background.paper,
          },
        },
      }}
      data={data}
      margin={{
        top: isDashboard || isLargeMobile ? 25 : 50,
        right: isDashboard || isLargeMobile ? 25 : 110,
        bottom: isLargeMobile && !isDashboard ? 100 : 50,
        left: isDashboard || isLargeMobile ? 45 : 60,
      }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard || isLargeMobile ? null : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard || isLargeMobile ? null : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableArea={true}
      // areaBlendMode="hard-light"
      enableGridX={false}
      enableGridY={false}
      pointSize={5}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableSlices="x"
      useMesh={true}
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: isLargeMobile ? "bottom" : "bottom-right",
                direction: isLargeMobile ? "row" : "column",
                justify: false,
                translateX: isLargeMobile ? 15 : 100,
                translateY: isLargeMobile ? 80 : 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
                toggleSerie: true,
              },
            ]
      }
    />
  );
};

export default LineChart;
