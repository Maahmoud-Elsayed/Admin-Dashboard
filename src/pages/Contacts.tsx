import { Box } from "@mui/material";
import Header from "../components/ui/Header";
import ContactsTable from "../components/tables/ContactsTable";


const ContactsPage = () => {
  return (
    <Box >
      <Header
        title="CONTACTS"
        description="List of Contacts for Future Reference"
      />
      <ContactsTable />
    </Box>
  );
}

export default ContactsPage