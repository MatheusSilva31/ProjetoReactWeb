import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { CardComponent } from "../../shared/components/CardComponent";
import { useGet } from "../../shared/hooks/useGetRequest";
import { NavigationComponentBar } from "../../shared/components/NavigationComponent";
import { FixedBottomNavigation } from "../../shared/components/NavigationComponentFixed";

export const CadastrarPage: React.FC = () => {

  
 



  return (
    <>
      <Container maxWidth="sm"></Container>
      <Grid container spacing={1}>
        <h1> outra tela</h1>
        <FixedBottomNavigation></FixedBottomNavigation>
      </Grid>
    </>
  );
};
