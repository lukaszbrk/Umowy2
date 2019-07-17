import React from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";
import { useState } from 'react';

const Columns = ({data, selectedClause}) => {
    
    
    const [exampleNumber, setNumber] = useState(0);
 
    
    return (

    


    <Grid.Column width={10}>
    <Segment>
    {console.log(selectedClause)}
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
        
            {selectedClause ? <Container textAlign='justified'><p>{data['Clauses'][selectedClause]['Examples'][exampleNumber]['pl']}</p></Container>:<Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />}
            
          </Grid.Column>
          <Grid.Column>
          {selectedClause ? <Container textAlign='justified'><p>{data['Clauses'][selectedClause]['Examples'][exampleNumber]['eng']}</p></Container>:<Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Grid.Column>
)};
export default Columns;