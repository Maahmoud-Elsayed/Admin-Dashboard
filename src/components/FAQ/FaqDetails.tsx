import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const accItems = [
  "An Important Question",
  "Another Important Question",
  "Your Favorite Question",
  "Some Random Question",
  "The Final Question",
];
const FaqDetails = () => {
  return (
    <Box mt="40px">
      {accItems.map((acc, index) => (

          <Accordion defaultExpanded={index === 0} key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color="secondary" variant="h5">
                {acc}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="inherit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                fugit minus, omnis labore quam numquam accusamus, ipsum
                consequuntur suscipit voluptatibus quidem asperiores tempora
                assumenda, facere blanditiis laudantium non voluptate animi!
              </Typography>
            </AccordionDetails>
          </Accordion>
      ))}
    </Box>
  );
};

export default FaqDetails;
