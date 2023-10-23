import { Box } from "@mui/material"
import CalendarEvents from "../components/calendar/CalendarEvents"
import Header from "../components/ui/Header"


const CalendarPage = () => {
  return (
    <Box >
      <Header title="CALENDAR" description="Full Calendar Interactive Page" />
      <CalendarEvents />
    </Box>
  );
}

export default CalendarPage