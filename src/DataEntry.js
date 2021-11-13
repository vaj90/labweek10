import React, { Component } from "react";
//Component based
export default class DataEntry extends Component{
    constructor(props){
        super(props)
        this.state ={
            dataEntry : this.props.dataEntry
        }
    }
    componentWillMount() {

    }
    render() {
        return (
            <div id="dataOutput">
                <ul>
                    <li>
                        <p><b>Email:</b><span>{this.state.dataEntry.emailAddress}</span></p>
                    </li>
                    <li>
                        <p><b>Full Name:</b><span>{this.state.dataEntry.fullName}</span></p>
                    </li>
                    <li>
                        <p><b>Address 1:</b><span>{this.state.dataEntry.address1}</span></p>
                    </li>
                    {
                        this.state.dataEntry.address2 ? 
                        <li>
                            <p><b>Address 2:</b><span>{this.state.dataEntry.address2}</span></p>
                        </li>
                        : null
                    }
                    <li>
                        <p><b>City:</b><span>{this.state.dataEntry.city}</span></p>
                    </li>
                    <li>
                        <p><b>Province:</b><span>{this.state.dataEntry.province}</span></p>
                    </li>
                    <li>
                        <p><b>Postal Code:</b><span>{this.state.dataEntry.postalCode}</span></p>
                    </li>
                </ul>
            </div> 
        )
    }
}
