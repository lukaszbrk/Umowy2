//move components to different files

import React from "react";

import image from "./paragraph.png"

import {
   
    Grid,
    Image,

  } from "semantic-ui-react";



const DefaultScreen = () => {




  return (
    <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
      
          <Image src={image} />
        
      </Grid.Column>
      <Grid.Column>
      
          <Image src={image} />
        
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );
};
export default DefaultScreen;
 