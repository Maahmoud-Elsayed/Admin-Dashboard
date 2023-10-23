import { Box } from "@mui/material";
import Header from "../components/ui/Header";
import InvoicesTable from "../components/tables/InvoicesTable";


const InvoicesPage = () => {
  return (
    <Box >
      <Header title="Invoices" description="List of Invoice Balances" />
      <InvoicesTable />
    </Box>
  );
}

export default InvoicesPage