import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React, { forwardRef } from "react";

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;

  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
