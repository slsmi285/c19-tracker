import React from "react";
import "./style.css";


function SearchResults(props) {
  return (
       <h5>Active Cases in this region: { props.active_cases }</h5>
     );
}

export default SearchResults;