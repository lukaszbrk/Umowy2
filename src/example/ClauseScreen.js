import React from "react";
import { Segment, Divider, Pagination } from "semantic-ui-react";
import { useState, useLayoutEffect, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Columns from "./Columns.js";


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

  }, [selectedClause]);

  const onPageChange = (e, { activePage }) => {

    console.log("ActivePage before onclick: " + activePage);
    setactivePage(activePage);
    console.log("ActivePage after onclick: " + activePage);
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

      {objectLength(_data) >= activePage ? (
        <Columns _data={_data} activePage={activePage} />
      ) : (
        <Columns _data={_data} activePage={1} />
      )}
    </Segment>
  );
};
export default ClauseScreen;
