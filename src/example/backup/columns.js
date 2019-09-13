
import React from "react";
import {
  Container,
  Grid,
  Segment,
  Divider,
  Pagination,
  Button,
  Icon
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Columns from "./Columns.js";


const pStyle = {
  padding: "10px",
  paddingBottom: "50px",
  border: "1px solid blue"
};

function objectLength(obj) {
  var result = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
  
      result++;
    }
  }
  return result;
}



const ClauseScreen = ({ data }) => {

  const { _data, selectedClause} = data;


  const [activePage, setactivePage] = useState(1);

 

  useEffect(() => {

    console.log("In useEffect")
 
    console.log("ActivePage before useEffect: "+activePage)
    setactivePage(1);
    console.log("ActivePage after useEffect: "+activePage)


   
   }, [selectedClause]);


  const onPageChange = (e, { activePage }) => {
    //console.log("ActivePage is: "+activePage)
    console.log("ActivePage before onclick: "+activePage)
    setactivePage(activePage);
    console.log("ActivePage after onclick: "+activePage)
 


  };

  return (
    <Segment>
      <Pagination
        activePage = {activePage}
        boundaryRange={0}
        //defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}

        totalPages={objectLength(_data)}
        onPageChange={onPageChange}
      />

      <Divider />
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Container textAlign="justified">
              <p contentEditable="true" style={pStyle}>
                {_data[activePage-1]["pl"]}
                <CopyToClipboard text={_data[activePage-1]["pl"]}>
                  <Button size="mini" basic floated="right">
                    <Icon name="copy" />
                    Kopiuj
                  </Button>
                </CopyToClipboard>
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column>
            {
              <Container textAlign="justified">
                <p contentEditable="true" style={pStyle}>
                  {_data[activePage-1]["eng"]}
                  <CopyToClipboard text={_data[activePage-1]["eng"]}>
                    <Button size="mini" basic floated="right">
                      <Icon name="copy" />
                      Copy
                    </Button>
                  </CopyToClipboard>
                </p>
              </Container>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
export default ClauseScreen;
