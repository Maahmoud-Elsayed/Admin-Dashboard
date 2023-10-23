import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";

const ErrorPage = () => {
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography
        variant="h1"
        color="error"
        fontWeight="bold"
        sx={{ fontSize: "140px", alignSelf: "center" }}
      >
        404
      </Typography>
      <Typography variant="h2" fontWeight="bold">
        Page not found!
      </Typography>
      <Typography variant="h5" component="p" mt={2} mb={3} textAlign="center">
        Sorry, the page you are looking for could not be found or has been
        removed.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ borderRadius: "8px", alignSelf: "center", py: "7px" }}
      >
        Go home
      </Button>
    </Container>
  );
};

export default ErrorPage;
