//move components to different files

import React from "react";
import { List } from "semantic-ui-react";
import ColumnsforKeyword from "./ColumnsforKeyword.js";

import { useState, useEffect  } from "react";

const KeywordScreen = ({ data }) => {

  //console.log(data["dataforColumns"]);




  const [ListNumber, setListNumber] = useState("");

  
  useEffect(() => {


   setListNumber("")
    //
  }, [data["selectedKeyword"]]);


    const onClikedItem = e => {
    //console.log(e.currentTarget.id);
    setListNumber(e.currentTarget.id);
  };

 

  function Test(data) {
  

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
    

    //add/replace "old" keyword for state

    
    return rndrdList;
  }

  for (var i = 0; i < data["dataforColumns"].length; i++) {
    //console.log("Data for columns: " + data["dataforColumns"][i][1]);
  }

  for (var i = 0; i < data["dataforColumns"].length; i++) {
    //console.log("Data for columns: " + data["dataforColumns"][i][1]);
    //console.log("Data for columns: " + data["dataforColumns"][i][0]);
  }

  for (var i = 0; i < data["_clauseDescription"].length; i++) {
    //console.log("Clauses: " + data["_clauseDescription"][i][0]);
  }
  return (
    <div>
      <p>Keywords Screen</p>
      <p>{"Number of pairs: " + data["dataforColumns"].length}</p>

      {/*
      <List divided relaxed>{Test(data)}</List>
      */}

       {
      (!ListNumber)? <List divided relaxed>{Test(data)}</List> : <ColumnsforKeyword data={data}/>
      }
    </div>
  );
};
export default KeywordScreen;
