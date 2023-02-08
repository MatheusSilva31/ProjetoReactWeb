import { Alert, AlertColor, Snackbar as SnackbarMui } from "@mui/material";
import React from "react";

type Props = {
  message?: string;
  type?: AlertColor;
  open?: boolean;
  setOpen: (value: boolean) => void;
};

export const Snackbar: React.FC<Props> = ({
  message,
  type,
  open = false,
  setOpen,
}) => {
  const handleClose = (event: React.SyntheticEvent | Event) => {
    setOpen(false);
  };

  return (
    <>
      <SnackbarMui
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert  variant="filled" severity={type}>{message}</Alert>
      </SnackbarMui>
    </>
  );
};