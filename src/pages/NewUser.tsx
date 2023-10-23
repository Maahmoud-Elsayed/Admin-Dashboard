import { Box } from "@mui/material";
import Header from "../components/ui/Header";
import UserForm from "../components/CreateUser/UserForm";


const  NewUserPage = () => {
  return (
    <Box >
      <Header title="CREATE USER" description="Create a new user profile" />
      <UserForm />
    </Box>
  );
}

export default NewUserPage;