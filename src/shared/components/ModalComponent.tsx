// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { ModalProps } from './types/types';

// const style = {
//   position: 'absolute' ,
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export const ModalComponent = ({modalID}:) => {

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

 
//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

import { Divider, Grid, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import ModalMui from "@mui/material/Modal";
import React from "react";

const sizeModal = {
  xs: 300,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

type Props = {
  staticEsc?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  buttons: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode | React.ReactNode[];
};

export const ModalComponent: React.FC<Props> = ({
  staticEsc = false,
  size = "sm",
  buttons,
  open,
  setOpen,
  children,
}) => {
  return (
    <>
      <ModalMui
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={staticEsc ? undefined : () => setOpen(false)}
        closeAfterTransition
        disableEscapeKeyDown
        disablePortal
        disableEnforceFocus
      >
        <Fade in={open}>
          <Paper
            sx={{
              position: "absolute" ,
              width: sizeModal?.[size],
              maxWidth: "96%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Grid container>
              <Grid item xs={12} padding={1}>
                {children}
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} padding={1}>
                {buttons}
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </ModalMui>
    </>
  );
};