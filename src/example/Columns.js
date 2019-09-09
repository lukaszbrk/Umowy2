//move components to different files

import React from "react";
import { Container, Grid, Button, Icon } from "semantic-ui-react";

import { CopyToClipboard } from "react-copy-to-clipboard";

const pStyle = {
  padding: "10px",
  paddingBottom: "50px",
  border: "1px solid blue"
};

const Columns = ({ _data, activePage }) => {
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <Container textAlign="justified">
            <p contentEditable="true" style={pStyle}>
              {_data[activePage - 1]["pl"]}
              <CopyToClipboard text={_data[activePage - 1]["pl"]}>
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
                {_data[activePage - 1]["eng"]}
                <CopyToClipboard text={_data[activePage - 1]["eng"]}>
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
  );
};
export default Columns;
