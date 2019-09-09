//move components to different files

import React from "react";

import { Segment, Divider, Pagination } from "semantic-ui-react";
import Columns from "./Columns.js";

import { useState, useEffect } from "react";

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

  //prep data for Columns
  function filterbyListItem(arr) {
    return arr[0] === ListItem;
  }

  let filtered = data["dataforColumns"].filter(filterbyListItem);
  let _data = {};
  let counter = 0;

  for (let arr in filtered) {
    //object for Columns; so it resembles the object like in Clauses dir
    _data[counter] = {
      pl: filtered[arr][1][0]["pl"],
      eng: filtered[arr][1][0]["eng"]
    };

    counter++;
  }

  

  const [activePage, setactivePage] = useState(1);

  useEffect(() => {
    setactivePage(1);
  }, [objectLength(data["dataforColumns"])]);

  const onPageChange = (e, { activePage }) => {
    setactivePage(activePage);
  };

  return (
    <Segment>
      <Pagination
        activePage={activePage}
        boundaryRange={0}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        totalPages={data["clause_n_number"][ListItem]}
        onPageChange={onPageChange}
      />
      {/* button for returnomh to the selection*/}
      <Butts />
      <Divider />

      <Columns _data={_data} activePage={activePage} />
    </Segment>
  );
};

export default ColumnsforKeyword;
