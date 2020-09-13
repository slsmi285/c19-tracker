import React from "react";
import "./style.css";


function SearchResults(props) {
  return (
       <p>Active Cases in this region: { props.active_cases }</p>
     );
}

export default SearchResults;