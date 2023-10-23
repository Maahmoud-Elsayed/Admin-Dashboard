import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../../data/mockData";
import { useMediaQuery, useTheme } from "@mui/material";

type PieChartProps = {
  isDashboard?: boolean;
};

const PieChart = ({ isDashboard = false }: PieChartProps) => {
  const isLargeMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  return (
    <ResponsivePie
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
      margin={{
        top: isDashboard ? 25 : 40,
        right: isDashboard ? 65 : 80,
        bottom: isDashboard ? 40 : 80,
        left: isDashboard ? 60 : 80,
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={{ from: "color", modifiers: [] }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={true}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: "bottom",
                direction: isLargeMobile ? "column" : "row",
                justify: false,
                translateX: isLargeMobile ? 40 : 0,
                translateY: isLargeMobile ? 50 : 56,
                itemsSpacing: isLargeMobile ? 15 : 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.secondary.main,
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

export default PieChart;
