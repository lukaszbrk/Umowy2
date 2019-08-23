//move components to different files

import React from "react";
import { List, Button } from "semantic-ui-react";
import ColumnsforKeyword from "./ColumnsforKeyword.js";

import { useState, useEffect  } from "react";



const KeywordScreen = ({ data }) => {

  console.log(data)

  function somefunction() {

    console.log("testttt")
    setListNumber("")

  }
  //passed as props
  const Butts = () => {return <Button onClick={somefunction} content="Return to the results" />}


  const [ListNumber, setListNumber] = useState("");

  
  useEffect(() => {


   setListNumber("")
    //change
  }, [data["selectedKeyword"]]);




    const onClikedItem = e => {
    setListNumber(e.currentTarget.id);
    console.log("Selected tab: " +e.currentTarget.id)
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
    



    
    return rndrdList;
  }

  return (
    <div>
      <p>Keywords Screen</p>
      <p>{"Number of pairs: " + data["dataforColumns"].length}</p>
       {
      (!ListNumber)? <List divided relaxed>{Test(data)}</List> : <ColumnsforKeyword data={data} Butts={Butts} ListNumber={ListNumber}/>
      }
    </div>
  );
};
export default KeywordScreen;
