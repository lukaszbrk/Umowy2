//move components to different files

import React from "react";
import { List } from "semantic-ui-react";
import Columns from "./Columns.js";

import { useState, useEffect  } from "react";

const ColumnsforKeyword = ({ data }) => {


    
  
  return (
    <div>
            {console.log(data["dataforColumns"][0][1])}
    </div>
  );
};
export default ColumnsforKeyword;
