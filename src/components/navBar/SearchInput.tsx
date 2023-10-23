import { Box, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, OutlinedInput } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import CloseIcon from "@mui/icons-material/Close";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { forwardRef } from "react";

type SearchInputProps = {
  closeSearchHandler: () => void;
  style?: { visibility: undefined | "hidden" }; //
};
const SearchInput = forwardRef(
  (
    { style, closeSearchHandler }: SearchInputProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme();
    return (
      <Box
        {...style}
        component="div"
        ref={ref}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 999,
          height: "100%",
          width: "100%",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ClickAwayListener onClickAway={closeSearchHandler}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            gap={1}
          >
            <IconButton
              onClick={closeSearchHandler}
              size="medium"
              type="button"
              color="inherit"
              sx={{ backgroundColor: theme.palette.background.paper }}
            >
              <CloseIcon />
            </IconButton>
            <OutlinedInput
              size="small"
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 4,
                flexGrow: 1,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton size="small" type="button" color="inherit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Search"
            />
            <IconButton
              size="medium"
              type="button"
              color="inherit"
              sx={{ backgroundColor: theme.palette.background.paper }}
            >
              <MicIcon />
            </IconButton>
          </Box>
        </ClickAwayListener>
      </Box>
    );
  }
);

export default SearchInput;
