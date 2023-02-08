export type SharedActions = {

  

    toggleModalUpdateMovie: (data: DataMovie) => void;
    sendUpdate?: (data: DataMovie) => void;
   
  
  };

  export type RefDataUpdateMovie= {
      current:{
          toggleModal:(data:DataMovie) => void;
          clearSuspender:()=>void;
          closeModal:()=>void
      }
  }

  export type DataMovie = {
        _id: string,
        alreadyBeenWatched: boolean,
        sinopse: string
        poster: string,
        title: string,
        __v: number    
  }