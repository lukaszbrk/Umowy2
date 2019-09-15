//move components to different files

import React from "react";
import { List, Button } from "semantic-ui-react";
import ColumnsforKeyword from "./ColumnsforKeyword.js";

import { useState, useEffect } from "react";

const KeywordSelectionScreen = ({ data }) => {


  function returntoKeywordSelectionScreen() {
    setListItem("");
  }
  // btn passed as props
  const Butts = () => {
    return (
      <Button
   
        onClick={returntoKeywordSelectionScreen}
        content="Wróć do wyników"
      />
    );
  };

  const [ListItem, setListItem] = useState("");

  useEffect(() => {
    setListItem("");

    //change 
  }, [data["selectedKeyword"]]);

  const onClikedItem = (e) => {
    setListItem(e.currentTarget.id);
  };

  function renderList(data) {
    let rndrdList = [];
    for (let i = 0; i < data["_clauseDescription"].length; i++) {
      rndrdList.push(
        <List.Item
          style={{ cursor: "pointer" }}
          key={data["_clauseDescription"][i][0]}
          onClick={onClikedItem}
          id={data["_clauseDescription"][i][0]}
        >
          <List.Content>
            <List.Header> {data["_clauseDescription"][i][0]}</List.Header>

            <List.Description>
              {data["_clauseDescription"][i][1]}
            </List.Description>

            <p>
              Liczba przykładów:{" "}
              {data["clause_n_number"][data["_clauseDescription"][i][0]]}
            </p>
          </List.Content>
        </List.Item>
      );
    }

    return rndrdList;
  }

  return (
    <div>
    
      <p>{"Liczba przykładów: " + data["dataforColumns"].length}</p>
      {/*initial render - listitem not selected | no data for the given selection (after render ) => render the list */}
      {!ListItem | !data["clause_n_number"][ListItem] ? (
        <List divided relaxed>
          {renderList(data)}
        </List>
      ) : (
        <ColumnsforKeyword data={data} Butts={Butts} ListItem={ListItem} />
      )}
    </div>
  );
};
export default KeywordSelectionScreen;
