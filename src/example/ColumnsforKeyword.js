//move components to different files

import React from "react";

import { Segment, Divider, Pagination } from "semantic-ui-react";
import Columns from "./Columns.js";

import { useState, useEffect } from "react";

import {longestCommonSubstring, findWords} from "./utils.js"
import {detLang} from "./Keys_n_Clauses"


function markKeywords(text, ListItem) {

  let lcs = longestCommonSubstring(text, ListItem)

  console.log("LCS is: "+lcs)

  let markedText = findWords(lcs, text)

  return markedText


}
function objectLength(obj) {

  var result = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result++;
    }
  }
  return result;
}

const ColumnsforKeyword = ({ data, Butts, ListItem }) => {

  const [activePage, setactivePage] = useState(1);

  useEffect(() => {
    setactivePage(1);

    //change
  }, [objectLength(data["dataforColumns"])]);

  //prep data for Columns
  function filterbyListItem(arr) {
    return arr[0] === ListItem;
  }

  let filtered = data["dataforColumns"].filter(filterbyListItem);
  let _data = {};
  let counter = 0;



  for (let arr in filtered) {

    if (detLang(data["selectedKeyword"])) {

      _data[counter] = {
        pl: markKeywords(filtered[arr][1][0]["pl"], data["selectedKeyword"]),
        eng: filtered[arr][1][0]["eng"]

      }

      //console.log(markKeywords(filtered[arr][1][0]["pl"], data["selectedKeyword"]))

    }  else {


      _data[counter] = {
        pl: filtered[arr][1][0]["pl"],
        eng: markKeywords(filtered[arr][1][0]["eng"], data["selectedKeyword"])
      }

      //console.log(markKeywords(filtered[arr][1][0]["eng"], data["selectedKeyword"]))
    }

    /*
    //object for Columns; so it resembles the object like in Clauses dir
    _data[counter] = {
      pl: filtered[arr][1][0]["pl"],
      eng: filtered[arr][1][0]["eng"]

   */

  counter++;
    }

  
    //console.log('-----------------------------------------')
    //console.log("Text is: "+filtered[arr][1][0]["pl"])
    //console.log("Keyword is: "+data["selectedKeyword"])
  
    //console.log(markKeywords(filtered[arr][1][0]["pl"], data["selectedKeyword"]))




  



  const onPageChange = (e, { activePage }) => {
    setactivePage(activePage);
  };

  return (

 
    <div >
      <Pagination
        activePage={activePage}
        boundaryRange={0}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        totalPages={data["clause_n_number"][ListItem]}
        onPageChange={onPageChange}
      />
      {/* button for returning to the selection*/}
      <span>  </span>
      <Butts />
      <Divider />

      <Columns _data={_data} activePage={activePage} />
    </div>
  );
};

export default ColumnsforKeyword;
