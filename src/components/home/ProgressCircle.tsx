import CircularProgress, {
  CircularProgressProps,
  
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";


function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  const theme = useTheme()
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        size={60}
        thickness={5}
        sx={{
          color: theme.palette.purple.light,
          zIndex:2
        }}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          component="div"
          color="text"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProgressCircle({ value }: { value: number }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= value ? value : prevProgress + 10
      );
    }, 70);
    return () => {
      clearInterval(timer);
    };
  }, [progress, value]);

    const theme = useTheme();

  return (
    <Box position="relative" display="flex">
      <CircularProgressWithLabel value={progress} />
      <CircularProgress
        value={100}
        variant="determinate"
        size={60}
        thickness={5}
        sx={{
          position: "absolute",
          color: theme.palette.mode === "dark" ? "grey.600" : "grey.400",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
