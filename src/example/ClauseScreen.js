import React from "react";
import { Segment, Divider, Pagination } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Columns from "./Columns.js";

//no. of pages in pagination
function objectLength(obj) {
  var result = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result++;
    }
  }
  return result;
}

const ClauseScreen = ({ data }) => {

  console.log("rendering Clause screen");

  const { _data, selectedClause } = data;

  const [activePage, setactivePage] = useState(1);


  useEffect(() => {
 
    setactivePage(1);
//set pagination after selecting a new clause
  }, [selectedClause]);

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
        totalPages={objectLength(_data)}
        onPageChange={onPageChange}
      />

      <Divider />
      _data
       {console.log(_data)}
      {/*pagination does not reset immediately; throws undefined after  */}
      {objectLength(_data) >= activePage ? (
        <Columns _data={_data} activePage={activePage} />
      ) : (
        <Columns _data={_data} activePage={1} />
      )}
    </Segment>
  );
};
export default ClauseScreen;
