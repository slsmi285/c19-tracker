import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Hero from "../components/Hero";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import { List, ListInfo } from "../components/List";
//import Models from "../../../models";


//const db = require("../../src/");



class Info extends Component {
  state = {
        
            stateinfo: "",
            restrictions: "",
            masks: "",
            href: ""
   
  };
  componentDidMount() {
    this.loadInfoState();
  }
  loadInfostate = () => {
    API.getInfoState()
      .then(res =>
        this.setState({ infostate: res.data })
      )
      .catch(err => console.log(err));
  };
  deleteInfoState = id => {
    API.deleteInfostate(id)
      .then(res => this.loadinfoState())
      .catch(err => console.log(err));
  };
  render() {
		return (
			<Container fluid>
				<Row>
					
						<Hero>
							<h1>State </h1>
						</Hero>
						{/* <form>
							<
								value={this.state.stateinfo}
								onChange={this.handleInputChange("stateinfo")}
								name="stateinfo"
								placeholder="State (required)"
							/>
						
							<FormBtn
								disabled={
									!(this.state.stateinfo)
								}
								onClick={this.handleFormSubmit}>
								Submit State
							</FormBtn>
						</form> */}
					
						<Hero>
							<h1>State Info</h1>
						</Hero>
						{this.state.info.length ? (
							<List>
								{this.state.info.map((info) => (
									<ListInfo key={info._id}>
										<Link to={"/info/" + info._id}>
											<strong>
												{info.stateinfo} by {info.stateinfo}
											</strong>
										</Link>
										<DeleteBtn
											onClick={() =>
												this.deleteItem(info._id)
											}
										/>
									</ListInfo>
								))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					
				</Row>
			</Container>
		);
	}
}
/*
      <p>State: { props.infostate_state }</p>
       <p>Restrictions: { props.infostate_restrictions }</p>
       <p>Masks ?: { props.infostate_masks }</p>
       <p>Further Info of this State: { props.infostate_href }</p>*/

export default Info;