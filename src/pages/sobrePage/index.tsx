import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { CardComponent } from "../../shared/components/CardComponent";
import { useGet } from "../../shared/hooks/useGetRequest";
import { NavigationComponentBar } from "../../shared/components/NavigationComponent";
import { FixedBottomNavigation } from "../../shared/components/NavigationComponentFixed";

export const AboutPage: React.FC = () => {

  
 



  return (
    <>
      <Container maxWidth="sm"></Container>
      <Grid container spacing={1}>
        <h1> POwered by</h1>
        <h1> PREACT  MATERIAL UI TODA A STACK UTILIZADA</h1>
        <h1> dESENVOLVIDOR POR MATHEUS</h1>
        <h1> SEM FINS LUCRATIVOS APENAS PARA ESTUDO</h1>
        <FixedBottomNavigation></FixedBottomNavigation>
      </Grid>
    </>
  );
};
