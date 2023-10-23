import { Box } from "@mui/material"
import TeamTable from "../components/tables/TeamTable"
import Header from "../components/ui/Header"

const TeamPage = () => {
  return (
    <Box >
      <Header title="TEAM" description="Managing the Team Members" />
      <TeamTable />
    </Box>
  );
}

export default TeamPage