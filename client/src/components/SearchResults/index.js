import React from "react";
import "./style.css";


function SearchResults(props) {
  return (
   

    <p>Active Cases in this region: { props.active_cases }</p>
  

   /* <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Dog" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>*/
  );
}
export default SearchResults;