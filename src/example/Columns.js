import React from "react";
import {
  Container,
  Grid,
  Image,
  Segment,
  Divider,
  Pagination
} from "semantic-ui-react";
import { useState } from "react";

const Columns = ({ data, selectedClause }) => {

//const use =  ()=>resetPagination? 0:{}
  const [exampleNumber, setNumber] = useState(0);

  const onPageChange = (e, { activePage }) => {
    console.log("exampleNumber: "+exampleNumber)
    console.log("activePage: " +activePage)
    setNumber(activePage-1);
  };

  return (
    <Grid.Column width={10}>
      <Segment>
  
        <Pagination
          boundaryRange={0}
    
          defaultActivePage={0}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
       //TODO get objects numbers for total Pages
          totalPages={2}
          onPageChange={onPageChange}
        />
            <Divider />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              {selectedClause ? (
                <Container textAlign="justified">
                  <p>
                    {
                      data["Clauses"][selectedClause]["Examples"][exampleNumber]["pl"]
                    }
                  </p>
                </Container>
              ) : (
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              )}
            </Grid.Column>
            <Grid.Column>
              {selectedClause ? (
                <Container textAlign="justified">
                  <p>
                    {
                      data["Clauses"][selectedClause]["Examples"][exampleNumber]["eng"]
                      
                    }
                  </p>
                </Container>
              ) : (
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
       
      </Segment>
    </Grid.Column>
  );
};
export default Columns;
