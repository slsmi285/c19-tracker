import React from "react";
import "./style.css";


function InfoState(props) {
  return (
      
       <p>State: { props.infostate_state }</p>
       <p>Restrictions: { props.infostate_restrictions }</p>
       <p>Masks ?: { props.infostate_masks }</p>
       <p>Further Info of this State: { props.infostate_href }</p>
     );
}
export default InfoState;