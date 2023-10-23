import { Box, Typography } from "@mui/material";

type HeaderProps = {
  title: string;
  description: string;
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <Box >
      <Typography variant="h3" fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {title}
      </Typography>
      <Typography variant="h5" color="secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default Header;
