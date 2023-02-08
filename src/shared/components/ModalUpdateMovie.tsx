import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React, { useImperativeHandle, useState } from "react";
import { DataMovie } from "../../pages/@types";
import { ModalComponent } from "./ModalComponent";

type Props = {
  refData: any;
  sharedAction: any;
};

export const ModalUpdateMove: React.FC<Props> = ({ sharedAction, refData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [idAction, setIdAction] = useState<string | null>(null);
  const [itemMovies,setItemMovies] = useState<DataMovie | null >(null)

  const buttons = (
    <Stack gap={1} justifyContent="flex-end" flexDirection="row">
      <Button variant="text"  onClick={() => {
          setOpen(false);
          idAction && sharedAction?.sendUpdate(itemMovies);
        }}>Confirmar</Button>
      <Button variant="text" onClick={() => setOpen(false)}>Fechar</Button>
     
    </Stack>
  );

  useImperativeHandle(refData, () => ({
    toggleModal(data: DataMovie) {
      setIdAction(data._id);
      setItemMovies(data)
      setOpen((prev) => !prev);
    },
    clearAtivar() {
      setIdAction(null);
    },
  }));

  return (
    <ModalComponent staticEsc buttons={buttons} open={open} setOpen={setOpen} size="sm">
      <Alert severity="warning">
        <AlertTitle>Atenção!</AlertTitle>
        {`Deseja alterar o status deste filme`}
      </Alert>
    </ModalComponent>
  );
};