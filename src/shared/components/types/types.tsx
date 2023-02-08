import { AlertColor } from "@mui/material"

export type CardComponentProps = {
    titleCard:string
    poster:string
    MovieTitle:string
    alreadyBeenWatched:boolean
    id:string
    handleUpdateStatus : Function 
    handleDeleteMovie : Function
    dataRequest? : any
    sinopseText : string
}

export type ModalProps = {

    ModalID : any
    
}

export type SnackBarProps = {
    message: string | undefined,
    open?: boolean | undefined,
    type?: AlertColor;
}


export type HandleMessageSuccess = {
    listMessage: string[];
    listSuccess: boolean[];
    fnSuccess: Function[];
    setAlert: Function;
    setSend?: Function;
    dataForm: object;
  };
  