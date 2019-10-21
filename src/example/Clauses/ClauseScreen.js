import React from "react";
import { Divider, Pagination } from "semantic-ui-react";
import { useState, useEffect} from "react";
import Columns from "../Columns.js";

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

function keyNav (e) {

  if (e.keyCode === 37) {

    console.log(`Key Number ${e.keyCode} pressed.`)
  }

  if (e.keyCode ===39) {

    console.log(`Key Number ${e.keyCode} pressed.`)

  }
}

const ClauseScreen = ({ data }) => {
  //console.log("rendering Clause screen");

  const { _data, selectedClause } = data;

  const [activePage, setactivePage] = useState(1);

  //const txt1 = useRef(null);

  useEffect(() => {
    setactivePage(1);
    //txt1.current.focus();
    //set pagination after selecting a new clause
  }, [selectedClause]);

  const onPageChange = (e, { activePage }) => {
    setactivePage(activePage);
  };

  return (
    <div>
      <p>Wybrana klauzula: {selectedClause}</p>
      <Pagination
        activePage={activePage}
        //boundaryRange={1}

        //firstItem={null}
        //lastItem={null}
        totalPages={objectLength(_data)}
        onPageChange={onPageChange}
        onKeyDown={keyNav}
        //ref={txt1}
      />

      <Divider />
 


      {/*activepage does not reset immediately  */}
      {objectLength(_data) >= activePage ? (
        <Columns _data={_data} activePage={activePage} />
      ) : (
        <Columns _data={_data} activePage={1} />
      )}

<p>
        Słowa kluczowe:{" "}
        {_data[activePage - 1]? (_data[activePage - 1].keywords.map(keyword => (
          <i>{"#" + keyword + " "}</i>
        ))):"Error"}

      </p>
      
    </div>
  );
};
export default ClauseScreen;
