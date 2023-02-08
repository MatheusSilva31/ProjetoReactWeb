export type HandleMessageSuccess = {
    listMessage: string[];
    listSuccess: boolean[];
    fnSuccess: Function[];
    setAlert: Function;
    setSend?: Function;
    dataForm: object;
  };
  
  export const handleMessageSuccess = ({
    listMessage,
    listSuccess,
    fnSuccess,
    setAlert,
    setSend,
    dataForm = {},
  }: HandleMessageSuccess) => {
    listSuccess?.forEach((success, index) => {
      if (success) {
        setAlert({
          message: listMessage[index],
          open: true,
          type: "success",
        });
        fnSuccess[index](false);
  
        setSend && setSend(dataForm);
      }
    });
  };