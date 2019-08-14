//move components to different files

import React from "react";
import { Grid, Segment, Divider } from "semantic-ui-react";

import DefaultScreen from "./DefaultScreen.js";
import KeywordScreen from "./KeywordScreen.js";
import ColumnsScreen from "./ColumnsScreen.js";

const MainScreen = ({ data, selectedClause, keywordSelected }) => {
  function rtrScreen(selectedClause, keywordSelected) {
    if (keywordSelected) {
      console.log("showing keywordSelected screen");
      return <KeywordScreen />;
    } else if (selectedClause) {
      return <ColumnsScreen data={data} selectedClause={selectedClause} />;
    } else {
      return <DefaultScreen />;
    }
  }

  return (
    <Grid.Column width={10}>
      <Segment>
        <p>Screen Description</p>
        <Divider />

        <p>Content: {keywordSelected}</p>
        {rtrScreen(selectedClause, keywordSelected)}
      </Segment>
    </Grid.Column>
  );
};
export default MainScreen;
