//move components to different files

import React from "react";
import { Grid, Segment, Divider } from "semantic-ui-react";

import DefaultScreen from "./DefaultScreen.js";
import KeywordScreen from "./KeywordScreen.js";
import ClauseScreen from "./ClauseScreen.js";

const MainScreen = ({ data, selectedClause, selectedKeyword }) => {
  function dataforColumnsScreen(selectedClause, selectedKeyword) {
    if (selectedKeyword) {
      prepDataforKeywordScreen(data, selectedKeyword);
      return (
        <KeywordScreen
          data={prepDataforKeywordScreen(data, selectedKeyword)}
          selectedKeyword={selectedKeyword}
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
    return data["Clauses"][selectedClause]["Examples"];
  }

  function prepDataforKeywordScreen(data, selectedKeyword) {
    let clause, example;
    let dataforColumns = [];
    let _clauseDescription = [];
    let aux = [];
    let aux2 = {}

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
              data["Clauses"][clause]["Examples"][example]["pl"],
              data["Clauses"][clause]["Examples"][example]["eng"]
            ]
          ]);

          if (!aux.includes(clause)) {
            _clauseDescription.push([
              clause,
              data["Clauses"][clause]["Description_PL"],
              data["Clauses"][clause]["Description_EN"], 0
            ]);

            aux.push(clause);

            //console.log(Object.keys(clause) + " was not found, "+"adding to : "+_clauseDescription)
          }
       
        }
      }
    }

    //console.log(aux2);

    return { dataforColumns, _clauseDescription, aux2, selectedKeyword };
  }

  return (
    <Grid.Column width={10}>
      <Segment>
        <p>Screen Description</p>
        <Divider />

        <p>Content: {selectedKeyword}</p>
        {dataforColumnsScreen(selectedClause, selectedKeyword)}
      </Segment>
    </Grid.Column>
  );
};
export default MainScreen;
