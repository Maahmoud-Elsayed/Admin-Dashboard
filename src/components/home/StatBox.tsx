import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
type StatBoxProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  value: number;
  increase: string;
  up:boolean
};

const StatBox = ({ title, subtitle, icon, value, increase,up }: StatBoxProps) => {
  const theme = useTheme();

  return (
    <Paper sx={{ position: "relative" }}>
      <Box
        p="8px"
        position="absolute"
        sx={{
          top: -20,
          left: 15,
          backgroundColor: theme.palette.purple.main,
          borderRadius: "10px",
          height: "50px",
          width: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Stack direction="column" p=" 15px" spacing={2}>
        <Typography
          variant="h5"
          align="right"
          sx={{ color: theme.palette.secondary.main }}
        >
          {title}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Stack direction="column" spacing={2}>
            <Typography variant="h4" fontWeight="bold">
              {subtitle}
            </Typography>
            <Box display="flex" gap={1} alignItems="center">
              <Typography
                variant="h5"
                fontStyle="italic"
                sx={{
                  color: up
                    ? theme.palette.secondary.main
                    : theme.palette.error.light,
                }}
              >
                {up ? `+ ${increase}` : `- ${increase}`}
              </Typography>
              <Typography variant="body2">Than Last Mounth</Typography>
            </Box>
          </Stack>
          <ProgressCircle value={value} />
        </Box>
      </Stack>
    </Paper>
  );
};

export default StatBox;
