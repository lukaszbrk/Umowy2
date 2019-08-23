//move components to different files

import React from "react";

import { Segment, Divider, Pagination } from "semantic-ui-react";
import Columns from "./Columns.js";

import { useState, useEffect  } from "react";


function objectLength(obj) {
    var result = 0;
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result++;
      }
    }
    return result;
  }

const ColumnsforKeyword = ({ data, Butts, ListNumber }) => {

    //
    console.log(ListNumber)

  
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
          totalPages={data["aux2"][ListNumber]}
          onPageChange={onPageChange}
        />
        {/* return to the selection*/}
        <Butts/>

        
  
        <Divider />

        
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
