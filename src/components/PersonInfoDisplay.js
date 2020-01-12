import React from "react";

class PersonInfoDisplay extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>{this.props.person.firstName} </span>
                    <span>{this.props.person.lastName}</span>
                </div>
                <div>
                    <span>{this.props.person.dissertationTitle}, </span>
                    <span>{this.props.person.dissertationYear}</span>
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
