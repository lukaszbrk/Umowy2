//move components to different files

import React from "react";

import { Divider, Pagination } from "semantic-ui-react";
import Columns from "../Columns.js";

import { useState, useEffect } from "react";

import { longestCommonSubstring, findWords } from "../utils.js";
import { detLang } from "../Keys_n_Clauses";

function markKeywords(text, ListItem) {
  let lcs = longestCommonSubstring(text, ListItem);

  // console.log("LCS is: "+lcs)

  let markedText = findWords(lcs, text);

  return markedText;
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

const ColumnsforKeyword = ({ data, RtrBtn, ListItem }) => {
  const [activePage, setactivePage] = useState(1);

  useEffect(() => {
    setactivePage(1);

    //change
  }, [objectLength(data["dataforColumns"])]);

  ///prep data for Columns///
  function filterbyListItem(arr) {
    return arr[0] === ListItem;
  }

  let filtered = data["dataforColumns"].filter(filterbyListItem);
  //console.log("After filter:");
  //console.log(filtered);
  let _data = {};
  let counter = 0;

  for (let arr in filtered) {
    if (detLang(data["selectedKeyword"])) {
      _data[counter] = {
        pl: markKeywords(filtered[arr][1][0]["pl"], data["selectedKeyword"]),
        eng: filtered[arr][1][0]["eng"],
        keywords: filtered[arr][1][0]["keywords"]
      };
    } else {
      _data[counter] = {
        pl: filtered[arr][1][0]["pl"],
        eng: markKeywords(filtered[arr][1][0]["eng"], data["selectedKeyword"]),
        keywords: filtered[arr][1][0]["keywords"]
      };
    }

    counter++;
  }

  const onPageChange = (e, { activePage }) => {
    setactivePage(activePage);
  };

  return (
    <div>
      <Pagination
        activePage={activePage}
        //boundaryRange={0}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        totalPages={data["clause_n_number"][ListItem]}
        onPageChange={onPageChange}
      />
      {/* button for returning to the selection*/}
      <span> </span>
      <RtrBtn />
      <Divider />
      <p>
        Inne słowa kluczowe:{" "}
        {_data[activePage - 1].keywords.map(keyword => (
          <i>{"#" + keyword + " "}</i>
        ))}
      </p>
      <Columns _data={_data} activePage={activePage} />
    </div>
  );
};

export default ColumnsforKeyword;
