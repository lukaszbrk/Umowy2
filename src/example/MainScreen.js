//move components to different files

import React from "react";
import { Grid, Segment, Divider } from "semantic-ui-react";

import DefaultScreen from "./DefaultScreen.js";
import KeywordSelectionScreen from "./KeywordSelectionScreen.js";
import ClauseScreen from "./ClauseScreen.js";

const MainScreen = ({ data, selectedClause, selectedKeyword }) => {


  //console.log("Rendering Main screen");


  function selectScreen(selectedClause, selectedKeyword) {


    if (selectedKeyword) {
      prepDataforKeywordSelectionScreen(data, selectedKeyword);
      return (
        <KeywordSelectionScreen data={prepDataforKeywordSelectionScreen(data, selectedKeyword)} />
      );
    } else if (selectedClause) {
      return (
        <ClauseScreen data={prepDataforClauseScreen(data, selectedClause)} />
      );
    } else {
      return <DefaultScreen />;
    }
  }

  function prepDataforClauseScreen(data, selectedClause) {
    let _data = data["Clauses"][selectedClause]["Examples"];
    
    return { _data, selectedClause };
  }
  //prune?
  function prepDataforKeywordSelectionScreen(data, selectedKeyword) {
    let clause, example;
    let dataforColumns = [];
    let _clauseDescription = [];
    let aux = [];
    // aux2 object: clause + number of examples for a given clause
    let aux2 = {};

    for (clause in data["Clauses"]) {
      for (example in data["Clauses"][clause]["Examples"]) {
        if (
          data["Clauses"][clause]["Examples"][example]["keywords"].includes(
            selectedKeyword
          )
        ) {
          aux2[clause] = aux2[clause] ? aux2[clause] + 1 : 1;

          dataforColumns.push([
            clause,
            [
              data["Clauses"][clause]["Examples"][example]
            ]
          ]);

          if (!aux.includes(clause)) {
            _clauseDescription.push([
              clause,
              data["Clauses"][clause]["Description_PL"],
              data["Clauses"][clause]["Description_EN"],
              
            ]);

            aux.push(clause);

       
          }
        }
      }
    }



    return { dataforColumns, _clauseDescription, aux2, selectedKeyword };
  }

  return (
    <Grid.Column width={10}>
      <Segment>
        <p>Screen Description</p>
        <Divider />

        <p>Content: {selectedKeyword}</p>
        {selectScreen(selectedClause, selectedKeyword)}
      </Segment>
    </Grid.Column>
  );
};
export default MainScreen;
