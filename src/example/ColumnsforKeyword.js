//move components to different files

import React from "react";

import { Segment, Divider, Pagination } from "semantic-ui-react";
import Columns from "./Columns.js";
import _ from "lodash";

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
  //
  //console.log(ListItem)
  //console.log(data["dataforColumns"]);

  function filterbyListItem(arr) {
    return arr[0] === ListItem;
  }

  //console.log(data["dataforColumns"].filter(filterbyListItem))

  let filtered = data["dataforColumns"].filter(filterbyListItem);
  let _data = []
  // let  obj = {}
 

  for (let arr in filtered) {
    console.log(filtered[arr][1]);
    
    _data.push(filtered[arr][1]);
    //console.log(obj)

    

  }

   //let d= Object.assign({}, _data );
  //console.log(_.filter(data["dataforColumns"],  {ListItem}))

  //console.log(_data);

  const [activePage, setactivePage] = useState(1);

  useEffect(() => {
    setactivePage(1);
  }, [objectLength(data["dataforColumns"])]);

  const onPageChange = (e, { activePage }) => {
    setactivePage(activePage);
    // {console.log(data["dataforColumns"][0][1])}
  };

  return (
    <Segment>
      <Pagination
        activePage={activePage}
        boundaryRange={0}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        totalPages={data["aux2"][ListItem]}
        onPageChange={onPageChange}
      />
      {/* return to the selection*/}
      <Butts />
      <Divider />
      //
      <Columns _data={_data} activePage={activePage} />
      {/* 
        {objectLength(_data) >= activePage ? (
          <Columns _data={_data} activePage={activePage} />
        ) : (
          <Columns _data={_data} activePage={1} />
        )}

        */}
      {/* 
        {objectLength(_data) >= activePage ? (
          <Columns _data={_data} activePage={activePage} />
        ) : (
          <Columns _data={_data} activePage={1} />
        )}

        */}
    </Segment>
  );
};

export default ColumnsforKeyword;
