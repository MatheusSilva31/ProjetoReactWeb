import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CardComponent } from "../../shared/components/CardComponent";
import { useGet } from "../../shared/hooks/useGetRequest";
import { NavigationComponentBar } from "../../shared/components/NavigationComponent";
import { FixedBottomNavigation } from "../../shared/components/NavigationComponentFixed";
import HeaderAppBar from "../../shared/components/HeaderBar";
import { usePutRequest } from "../../shared/hooks/usePutRequest";
import { ModalComponent } from "../../shared/components/ModalComponent";
import { ModalUpdateMove } from "../../shared/components/ModalUpdateMovie";
import { DataMovie, RefDataUpdateMovie, SharedActions } from "../@types";
import { Snackbar } from "../../shared/components/SnackBarComponent";
import { SnackBarProps } from "../../shared/components/types/types";
import { handleMessageSuccess } from "../../shared/components/utils/handleMessageSucess";

export const Page: React.FC = () => {



  const RefDataUpdateMovie = useRef() as RefDataUpdateMovie;
  const [id, setId] = useState<string>()


  const [alert,setAlert] = useState<SnackBarProps | undefined> (undefined)

  const { dataResponse, setSend, } = useGet<any>('api/v1/getAllMovie/')
  const { setSend: setSendPut, changeId: changeIdPut, sucess: sucessPut, loading } = usePutRequest(`api/v1/updateMovie/${id}`)


  const handleCloseSnapBar = () =>{
    setAlert({
      ...alert!,
      open:false
    })
  }

  useEffect(() => {
    console.log('chamou')
    setSend(true)
  }, [])


  useEffect(() => {
    if (sucessPut) {
      setId(undefined)
      setTimeout(() => {
        setSend(true)
      }, 1000)

    }

  }, [loading])

  const handleDelete = (id: string) => {
    console.log('Deletou', id)
  }



  //metas para amanhã
  //fazer os hooks de requisição
  //ajustar esse header ou pegar aquele que já vem com a search bar
  //ou criar uma search bar pra ficar abaixo do header
  //fazer a logica para atualizar se o filme foi assistido ou não
  //colocar o snack bar na requisição pra atualizar o filme
  //se der colocar o loading

  const sharedActions: SharedActions = {

    toggleModalUpdateMovie: (data: DataMovie) => {

      RefDataUpdateMovie?.current?.toggleModal(data);

      setId(data?._id)
    },
    sendUpdate(data: DataMovie) {
      console.log("send", data)
      setSendPut({
        title: data.title!,
        poster: data.poster,
        sinopse: data.sinopse,
        alreadyBeenWatched: !data.alreadyBeenWatched
      });
    },

  };


  // useEffect(()=>{
  //   handleMessageSuccess({
  //     listMessage:[
  //       "Filme atualizado com sucesso !"
  //     ],
  //     listSuccess:[
  //       sucessPut
  //     ]
  //   })
  // })

  return ( 
    <>
    <Snackbar 
    open={alert?.open}
    message={alert?.message}
    type={alert?.type}
    setOpen={handleCloseSnapBar}/>
   

      <HeaderAppBar></HeaderAppBar>
      <Container maxWidth="xl" >
        <Grid container spacing={1}>
          {
            dataResponse?.map((item: any) => (
              <Grid item xs={12} md={3} key={Math.random()} mt={2} alignContent={'center'} alignItems={'center'} display={'flex'} >
                <CardComponent
                  key={Math.random()}
                  id={item?._id}
                  titleCard={item?.title}
                  poster={
                    item?.poster
                  }
                  MovieTitle={item?.title}
                  sinopseText={item?.sinopse}
                  alreadyBeenWatched={item?.alreadyBeenWatched}
                  handleUpdateStatus={() => sharedActions.toggleModalUpdateMovie(item)}
                  handleDeleteMovie={() => handleDelete(item?._id)}
                />
                {/* { modalIsVisible ? <ModalComponent ModalID={modalIsVisible} ></ModalComponent> : null} */}
                <ModalUpdateMove refData={RefDataUpdateMovie} sharedAction={sharedActions} ></ModalUpdateMove>

              </Grid>
            ))
          }
          <FixedBottomNavigation></FixedBottomNavigation>
        </Grid>
      </Container>
    </>
  );
};
