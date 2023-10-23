import { Box, IconButton, Paper, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

type SectionContainerProps = {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  height: string;
};
const SectionContainer = ({
  children,
  title,
  subTitle,
  height,
}: SectionContainerProps) => {
  const theme = useTheme();
  return (
    <Paper>
      <Box
        p="15px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5" color="secondary" fontWeight="600" pb={1}>
            {title}
          </Typography>
          {subTitle && (
            <Typography variant="h3" fontWeight="bold">
              {subTitle}
            </Typography>
          )}
        </Box>
        <Box>
          <IconButton
            size="small"
            sx={{
              backgroundColor: theme.palette.purple.main,
              ":hover": { backgroundColor: theme.palette.purple.dark },
            }}
          >
            <DownloadOutlinedIcon fontSize="large" sx={{ color: "grey.200" }} />
          </IconButton>
        </Box>
      </Box>
      <Box height={height} position="relative">
        <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
          {children}
        </Box>
      </Box>
    </Paper>
  );
};

export default SectionContainer;
