//move components to different files

import React from "react";
import { List, Button } from "semantic-ui-react";
import ColumnsforKeyword from "./ColumnsforKeyword.js";

import { useState, useEffect } from "react";

const KeywordSelectionScreen = ({ data }) => {
  //console.log(data["dataforColumns"])

  function returntoKeywordSelectionScreen() {

    setListItem("");
  }
  //passed as props
  const Butts = () => {
    return <Button onClick={returntoKeywordSelectionScreen} content="Return to the results" />;
  };

  const [ListItem, setListItem] = useState("");

  useEffect(() => {
 
    setListItem("");
    //change
  }, [data["selectedKeyword"]]);

  const onClikedItem = (e, ListItem) => {
    setListItem(e.currentTarget.id);
    //console.log(ListItem)
    //prepareDataforDisplay(data, e.currentTarget.id);
  };
/*
  function prepareDataforDisplay(data, id) {
    console.log("ListItem is: " + ListItem);

    let rtr = [];

    let item;

    for (item in data["dataforColumns"]) {
      console.log(data["dataforColumns"][item]);

      if (data["dataforColumns"][item][0] === ListItem) {
        console.log("Found: " + data["dataforColumns"][item][0]);

        rtr.push()
      }
    }

    return data;
  }
*/
  function renderList(data) {
    let rndrdList = [];
    for (var i = 0; i < data["_clauseDescription"].length; i++) {
      rndrdList.push(
        <List.Item
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
              {data["aux2"][data["_clauseDescription"][i][0]]}
            </p>
          </List.Content>
        </List.Item>
      );
    }

    return rndrdList;
  }

  return (
    <div>
      <p>Keywords Screen</p>
      <p>{"Number of pairs: " + data["dataforColumns"].length}</p>
      {!ListItem ? (
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
