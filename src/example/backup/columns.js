//move components to different files

import React from "react";
import {
  Container,
  Grid,
  Image,
  Segment,
  Divider,
  Pagination,
  Button,
  Icon
} from "semantic-ui-react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const pStyle = {
  padding: "10px",
  paddingBottom: "50px",
  border: "1px solid blue"
};

function objectLength(obj) {
  var result = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      // or Object.prototype.hasOwnProperty.call(obj, prop)
      result++;
    }
  }
  return result;
}

const Columns = ({ data, selectedClause, keywordSelected }) => {

//test func
  const search = () => {
    //get clause name, example indices
    let clause, example;

    for (clause in data["Clauses"]) {
      //console.log(clause)
      for (example in data["Clauses"][clause]["Examples"]) {

   

        //console.log(data["Clauses"][clause]["Examples"][example]["keywords"])

        if (data["Clauses"][clause]["Examples"][example]["keywords"].includes(keywordSelected))

        {
          console.log("Keyword "+ keywordSelected+ " found in: " + clause)
        } else {

          //console.log(keywordSelected + " was not found in: " + data["Clauses"][clause]["Examples"][example])
        }
      }
    }
  };

  const [exampleNumber, setNumber] = useState(0);

    //const use =  ()=>resetPagination? 0:{}

  const onPageChange = (e, { activePage }) => {
 
    setNumber(activePage - 1);
  };

  const returnTotalPages = () => {
    if (selectedClause) {
      //console.log(objectLength(data["Clauses"][selectedClause]["Examples"]))
      return objectLength(data["Clauses"][selectedClause]["Examples"]);
    } else {
      return 0;
    }
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
          totalPages={returnTotalPages()}
          onPageChange={onPageChange}
        />

        <p>
          {keywordSelected
            ? "Selected keyword: " + keywordSelected
            : "not selected"}
        </p>
        <Button onClick={search}>p</Button>
        <Divider />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              {selectedClause ? (
                <Container textAlign="justified">
                  <p contentEditable="true" style={pStyle}>
                    {
                      data["Clauses"][selectedClause]["Examples"][
                        exampleNumber
                      ]["pl"]
                    }
                    <CopyToClipboard
                      text={
                        data["Clauses"][selectedClause]["Examples"][
                          exampleNumber
                        ]["pl"]
                      }
                    >
                      <Button size="mini" basic floated="right">
                        <Icon name="copy" />
                        Kopiuj
                      </Button>
                    </CopyToClipboard>
                  </p>
                </Container>
              ) : (
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              )}
            </Grid.Column>
            <Grid.Column>
              {selectedClause ? (
                <Container textAlign="justified">
                  <p contentEditable="true" style={pStyle}>
                    {
                      data["Clauses"][selectedClause]["Examples"][
                        exampleNumber
                      ]["eng"]
                    }
                    <CopyToClipboard
                      text={
                        data["Clauses"][selectedClause]["Examples"][
                          exampleNumber
                        ]["eng"]
                      }
                    >
                      <Button size="mini" basic floated="right">
                        <Icon name="copy" />
                        Copy
                      </Button>
                    </CopyToClipboard>
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
