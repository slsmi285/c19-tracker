import React from "react";
//import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
	return (
		<div className="list-overflow-container">
			<ul className="list-group">{children}</ul>
		</div>
	);
}

export function ListInfo({ children }) {
	return <li className="list-group-info">{children}</li>;
}