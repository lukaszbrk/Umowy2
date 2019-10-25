//TODO move Clause nad Keywords components to directories

import React from "react";
import { Grid, Segment, Divider } from "semantic-ui-react";

import DefaultScreen from "./DefaultScreen.js";
import KeywordSelectionScreen from "../Keywords/KeywordSelectionScreen.js";
import ClauseScreen from "../Clauses/ClauseScreen.js";

const MainScreen = ({ data, selectedClause, selectedKeyword, RefButton }) => {
  //console.log("Rendering Main screen");

  function selectScreen(selectedClause, selectedKeyword) {
    if (selectedKeyword) {
      prepDataforKeywordSelectionScreen(data, selectedKeyword);
      return (
        <KeywordSelectionScreen
          data={prepDataforKeywordSelectionScreen(data, selectedKeyword)}
        />
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
  //TODO rewrite as db query
  function prepDataforKeywordSelectionScreen(data, selectedKeyword) {
    let clause, example;
    let dataforColumns = [];
    let _clauseDescription = [];
    let aux = [];
    // clause_n_number object: clause + number of examples for the given clause
    let clause_n_number = {};

    //check if the examples in clauses contain the selected keyword; count the occurences
    for (clause in data["Clauses"]) {
      for (example in data["Clauses"][clause]["Examples"]) {
        if (
          data["Clauses"][clause]["Examples"][example]["keywords"].includes(
            selectedKeyword
          )
        ) {
          clause_n_number[clause] = clause_n_number[clause]
            ? clause_n_number[clause] + 1
            : 1;

          dataforColumns.push([
            clause,
            [data["Clauses"][clause]["Examples"][example]]
          ]);

          if (!aux.includes(clause)) {
            _clauseDescription.push([
              clause,
              data["Clauses"][clause]["Description_PL"],
              data["Clauses"][clause]["Description_EN"]
            ]);

            aux.push(clause);
          }
        }
      }
    }

    console.log(dataforColumns);

    return {
      dataforColumns,
      _clauseDescription,
      clause_n_number,
      selectedKeyword
    };
  }

  return (
    <Grid.Column width={10} >
      <Segment >
        <p>
          <b>Przykłady</b>
        </p>
        <Divider />

        {/*<p>Content: {selectedKeyword}</p>*/}
        {selectScreen(selectedClause, selectedKeyword)}
      </Segment>

      <RefButton />
    </Grid.Column>
  );
};
export default MainScreen;
