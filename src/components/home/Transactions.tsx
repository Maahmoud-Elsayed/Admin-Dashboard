import { Box, Divider, Paper, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import { Fragment } from "react";



const Transactions = () => {
    const theme = useTheme();
  return (
    <Paper sx={{ p: "15px 0 15px 15px" }}>
      <Typography variant="h5" fontWeight="600" color="secondary" pb="20px">
        Recent Transactions
      </Typography>
      <Divider />
      <Box sx={{ height: "286px", overflowY: "auto" }}>
        {mockTransactions.map((transaction, i) => (
          <Fragment key={`${transaction.txId}-${i}`}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              py="15px"
              pr="15px"
            >
              <Box>
                <Typography color="secondary" variant="h5" width="75px">
                  {transaction.txId}
                </Typography>
                <Typography>{transaction.user}</Typography>
              </Box>
              <Box>{transaction.date}</Box>
              <Typography
                py="5px"
                borderRadius="4px"
                sx={{
                  background: theme.palette.gradient,
                  width: "65px",
                  color: "grey.100",
                }}
                align="center"
              >
                ${transaction.cost}
              </Typography>
            </Box>
            <Divider />
          </Fragment>
        ))}
      </Box>
    </Paper>
  );
};

export default Transactions;
