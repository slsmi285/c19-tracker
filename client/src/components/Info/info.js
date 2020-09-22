import React, { Component } from 'react';



export default class InfoList extends Component {

    constructor(props) {
        super(props);

        
    }



    render() {
        return (
            <div>
                <h3>State Information Advisory</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>State Info</th>
                            <th>Restrictions</th>
                            <th>Masks</th>
                            <th>Link</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.stateinfo}</td>
                            <td>{this.props.restrictions}</td>
                            <td>{this.props.masks}</td>
                            <td><a href={this.props.href} target="_blank">link</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}