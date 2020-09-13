import React from "react";
import "./style.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// function DeleteBtn(props) {
//   return (
//     <button className="btn" onClick={() => props.deleteBook(props)}>Delete Book</button>
//   );
// }
function DeleteBtn(props) {
  return (
    <span className="btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}
export default DeleteBtn;