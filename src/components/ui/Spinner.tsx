
import { CircularProgress, Container } from "@mui/material";

const Spinner = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 80px)",
      }}
    >
      <CircularProgress
        size={80}
        color="secondary"
        variant="indeterminate"
        disableShrink
      />
    </Container>
  );
};


export default Spinner;
