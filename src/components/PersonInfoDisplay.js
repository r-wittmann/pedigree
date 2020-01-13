import React from "react";

class PersonInfoDisplay extends React.Component {
    render() {
        return (
            <div style={{marginLeft: "10vw", marginRight: "10vw", padding: 10}}>
                <div>
                    <h3>
                        <span>{this.props.person.firstName} </span>
                        <span>{this.props.person.lastName}</span>
                    </h3>
                </div>
                <div>
                    <b>
                        <span>{this.props.person.dissertationTitle}, </span>
                        <span>{this.props.person.dissertationYear}</span>
                    </b>
                </div>
                <div>
                    <span>{this.props.person.schoolName}, </span>
                    <span>{this.props.person.region}</span>
                </div>
            </div>
        )
    }
}

export default PersonInfoDisplay;
