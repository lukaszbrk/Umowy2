//move components to different files

import React from "react";
import { List } from "semantic-ui-react";

const KeywordScreen = ({ data}) => {

  console.log(data)

  function Test(data) {

    

     //console.log(data["_clauseDescription"].length)

     let rndrdList = []
     for (var i = 0; i < data["_clauseDescription"].length; i++) {
       rndrdList.push( 
         
 
         <List.Item key={data["_clauseDescription"][i][0]}>
        
         <List.Content>
           <List.Header > {data["_clauseDescription"][i][0]}</List.Header>
           
           <List.Description >{data["_clauseDescription"][i][1]}</List.Description>

           <p>Liczba przykładów: {data["aux2"][data["_clauseDescription"][i][0]]}</p>
  
         </List.Content>
       </List.Item>)}
       
      return rndrdList
      };
  

  /*
  const  RenderList = (data) =>{

    let rndrdList = []
    for (var i = 0; i < data["_clauseDescription"].length; i++) {
      rndrdList.push( 
        

        <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'> {data["_clauseDescription"][i]}</List.Header>
          <List.Description as='a'>Description</List.Description>
        </List.Content>
      </List.Item>)
    
    }

    return rndrdList

  };
*/
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

     
      <List divided relaxed>{Test(data)}</List>
 
    </div>
  );
};
export default KeywordScreen;
