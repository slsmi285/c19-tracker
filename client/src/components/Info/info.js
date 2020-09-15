import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Info = props => (
    <tr>
        <td>{props.info.info_stateinfo}</td>
        <td>{props.info.info_restrictions}</td>
        <td>{props.info.info_masks}</td>
        <td>{props.info.info_href}</td>
        <td>
            <Link to={"/edit/"+props.info._id}>Edit</Link>
        </td>
    </tr>
)

export default class InfoList extends Component {

    constructor(props) {
        super(props);
        this.state = {info: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/info/1')
            .then(response => {
                this.setState({ info: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    infoList() {
        return this.state.info.map(function(currentInfo, i){
            return <Info info={currentInfo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Info List??</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>State Info</th>
                            <th>Restrictions</th>
                            <th>Masks</th>
                            <th>Href:</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.infoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}