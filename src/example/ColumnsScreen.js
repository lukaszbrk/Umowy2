//move components to different files

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

const Columns = ({ data, selectedClause }) => {
  //test func

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
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          //TODO get objects numbers for total Pages
          totalPages={returnTotalPages()}
          onPageChange={onPageChange}
        />

        <Divider />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Container textAlign="justified">
                <p contentEditable="true" style={pStyle}>
                  {
                    data["Clauses"][selectedClause]["Examples"][exampleNumber][
                      "pl"
                    ]
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
              }
            </Grid.Column>
            <Grid.Column>
              {
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
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};
export default Columns;
