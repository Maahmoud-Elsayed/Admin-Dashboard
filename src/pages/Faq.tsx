import { Box } from "@mui/material";
import FaqDetails from "../components/FAQ/FaqDetails";
import Header from "../components/ui/Header";


const FaqPage = () => {
  return (
    <Box >
      <Header
        title="CONTACTS"
        description="List of Contacts for Future Reference"
      />
      <FaqDetails />
    </Box>
  );
}

export default FaqPage