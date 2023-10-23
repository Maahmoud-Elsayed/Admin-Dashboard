import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../../data/mockData";
import { useMediaQuery, useTheme } from "@mui/material";

type BarChartProps = {
  isDashboard?: boolean;
};

const BarChart = ({ isDashboard = false }: BarChartProps) => {
  const theme = useTheme();

  const isLargeMobile = useMediaQuery("(max-width:600px)");
  return (
    <ResponsiveBar
      theme={{
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
      keys={["hot dog", "burger", "kebab", "donut"]}
      indexBy="country"
      margin={{
        top: isDashboard ? 20 : 50,
        right: isDashboard || isLargeMobile ? 20 : 130,
        bottom: isLargeMobile && !isDashboard ? 100 : 50,
        left: isDashboard || isLargeMobile ? 45 : 60,
      }}
      padding={0.3}
      groupMode={isDashboard ? undefined : "grouped"}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: 5,
        legend: isDashboard ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={isDashboard ? true : false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={
        isDashboard
          ? []
          : [
              {
                dataFrom: "keys",
                anchor: isLargeMobile ? "bottom" : "bottom-right",
                direction: isLargeMobile ? "row" : "column",
                justify: false,
                translateX: isLargeMobile ? -20 : 120,
                translateY: isLargeMobile ? 80 : 0,
                itemsSpacing:isLargeMobile ?30: 2,
                itemWidth: isLargeMobile ? 40 : 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize:  20,
                toggleSerie: true,

                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
      animate={isDashboard ? false : true}
      role="application"
      ariaLabel="bar chart"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default BarChart;
