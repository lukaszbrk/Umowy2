import React from "react";
import { Divider, Pagination } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Columns from "./Columns.js";

//no. of pages in pagination
function objectLength(obj) {
  let result = 0;
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result++;
    }
  }
  return result;
}

const ClauseScreen = ({ data }) => {
  //console.log("rendering Clause screen");

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
    <div>
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

      {/*activepage does not reset immediately  */}
      {objectLength(_data) >= activePage ? (
        <Columns _data={_data} activePage={activePage} />
      ) : (
        <Columns _data={_data} activePage={1} />
      )}
    </div>
  );
};
export default ClauseScreen;
