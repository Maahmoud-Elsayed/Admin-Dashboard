import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  formatDate,
} from "@fullcalendar/core/index.js";
import DeleteEventModal from "../modals/DeleteEventModal";
import AddEventModal from "../modals/AddEventModal";

const CalendarEvents = () => {
  const theme = useTheme();
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(
    null
  );
  const [isDeleteEventDialogOpen, setIsDeleteEventDialogOpen] = useState(false);
  const [isAddEventDialogOpen, setAddEventDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);

  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setAddEventDialogOpen(true);
  };

  const handleAddEvent = (title: string) => {
    const calendarApi = selectedDate?.view.calendar;
    calendarApi?.unselect();

    if (title && selectedDate) {
      calendarApi?.addEvent({
        id: `${selectedDate.start}-${title}`,
        title: title,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });
    }

    setAddEventDialogOpen(false);
  };

  const handleAddEventDialogClose = () => {
    setAddEventDialogOpen(false);
  };

  const handleEventClick = (selected: EventClickArg) => {
    setSelectedEvent(selected);
    setIsDeleteEventDialogOpen(true);
  };
  const handleConfirmDelete = () => {
    if (selectedEvent) {
      selectedEvent.event.remove();
    }
    setIsDeleteEventDialogOpen(false);
  };

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };
  const handleCloseModal = () => {
    setIsDeleteEventDialogOpen(false);
  };

  return (
    <>
      <Stack
        spacing={4}
        direction={{ xs: "column-reverse", md: "row" }}
        mt="40px"
      >
        <Paper
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: "20%" },
            p: "15px 0 15px 15px",
            maxHeight: { md: "calc(75vh + 30px)" },
            minHeight: { md: "calc(75vh + 30px)" },
          }}
        >
          <Typography variant="h4" align="center" color="secondary" pb="15px">
            Events
          </Typography>
          <Box
            sx={{
              overflowY: "auto",
              overflowX: "hidden",
              maxHeight: { md: "calc(100% - 40px)" },
              pr: "15px",
            }}
          >
            <List>
              <Grid
                container
                spacing={2}
                direction={{ xs: "row", md: "column" }}
              >
                {currentEvents.map((event) => (
                  <Grid item flexGrow={1} key={event.id}>
                    <ListItem
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color:
                          theme.palette.mode === "dark"
                            ? "inherit"
                            : "grey.100",
                        borderRadius: "4px",
                        py: 0,
                      }}
                    >
                      <ListItemText
                        sx={{
                          textAlign: "left",
                        }}
                        primary={
                          <Typography variant="h5">{event.title}</Typography>
                        }
                        secondary={
                          <Typography>
                            {formatDate(event.start!, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Box>
        </Paper>

        <Box
          flexGrow={1}
          sx={{
            ".& fc-list-day-cushion .fc-cell-shaded": {
              backgroundColor: `inherit !impotant`,
            },
          }}
        >
          <Paper sx={{ p: "15px" }}>
            <FullCalendar
              handleWindowResize
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={handleEvents}
              initialEvents={[
                {
                  id: "12315",
                  title: "All-day event",
                  date: new Date().toISOString().replace(/T.*$/, ""),
                },
                {
                  id: "5123",
                  title: "Timed event",
                  date:
                    new Date().toISOString().replace(/T.*$/, "") + "T12:00:00",
                },
              ]}
            />
          </Paper>
        </Box>
      </Stack>
      <DeleteEventModal
        isOpen={isDeleteEventDialogOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
      <AddEventModal
        open={isAddEventDialogOpen}
        onClose={handleAddEventDialogClose}
        onConfirm={handleAddEvent}
      />
    </>
  );
};

export default CalendarEvents;
