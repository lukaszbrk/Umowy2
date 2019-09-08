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
  console.log("ListItem is: "+ListItem)

  console.log("Number in data[aux2][ListItem] is: "+  data["aux2"][ListItem])
  //console.log(data["dataforColumns"]);
  console.log("dataforColumns is:" +data["dataforColumns"]);

  function filterbyListItem(arr) {
    return arr[0] === ListItem;
  }

  //console.log(data["dataforColumns"].filter(filterbyListItem))

  let filtered = data["dataforColumns"].filter(filterbyListItem);
  let _data = {}
  let counter = 0

  //console.log("Filtered : " +JSON.stringify(filtered));

  for (let arr in filtered) {
    //console.log("Pushing filtered: " +filtered[arr][1]);
    //   aux2[clause] = aux2[clause] ? aux2[clause] + 1 : 1;
//{ ...['a', 'b', 'c'] }
      //console.log({...filtered[arr][1]})
     //console.log("Adding : " +JSON.stringify(filtered[arr][1]));
    // console.log("filtered[arr][1][pl] is: "+filtered[arr][1][0]["pl"])
     _data[counter] = {"pl":filtered[arr][1][0]["pl"], "eng":filtered[arr][1][0]["eng"]}
   // _data[counter] = {...filtered[arr][1]}
    counter++
    //_data.push(filtered[arr][1]);
  

    

  }


  console.log(_data);

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
      
      <Columns _data={_data} activePage={activePage} />
 
    </Segment>
  );
};

export default ColumnsforKeyword;
