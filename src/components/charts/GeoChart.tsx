import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../../data/mockGeoFeatures";
import { mockGeographyData as data } from "../../data/mockData";

type GeoChartProps = {
  isDashboard?: boolean;
};

const GeoChart = ({ isDashboard = false }: GeoChartProps) => {
  const theme = useTheme();
  return (
    <ResponsiveChoropleth
      data={data}
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
        },
        tooltip: {
          container: {
            backgroundColor: theme.palette.background.paper,
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: isDashboard ? -45 : 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: `${theme.palette.text.primary}`,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
                toggleSerie: true,
              },
            ]
          : undefined
      }
    />
  );
};

export default GeoChart;
