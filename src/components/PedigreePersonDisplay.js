import React from "react";

class PedigreePersonDisplay extends React.Component {
    render() {
        return (
            <div style={{flexGrow: 1, textAlign: "center"}}>
                <div
                    id={this.props.person.personId}
                    style={{
                        display: "inline-block",
                        padding: 5,
                        margin: 5,
                        border: this.props.highlight ? "2px solid #acacac" : "1px solid #cacaca",
                        borderRadius: 4
                    }}>
                    <div>
                        <span>{this.props.person.firstName} </span>
                        <span>{this.props.person.lastName}</span>
                    </div>
                    <div>
                        <span>{this.props.person.dissertationYear}</span>
                    </div>
                    <div>
                        <span>{this.props.person.region}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PedigreePersonDisplay;
