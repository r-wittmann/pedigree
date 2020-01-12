import React from "react";

class PedigreePersonDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }
    render() {
        return (
            <div style={{flexGrow: 1, textAlign: "center"}}>
                <div
                    id={this.props.person.personId}
                    style={{
                        display: "inline-block",
                        padding: 5,
                        margin: 5,
                        border: "1px solid #acacac",
                        cursor: this.props.center ? "" : "pointer",
                        borderRadius: 4,
                        boxShadow: this.state.hover || this.props.center ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" : "",
                    }}
                    onClick={(() => this.props.onClick(this.props.person))}
                    onMouseEnter={() => this.setState({hover: true})}
                    onMouseLeave={() => this.setState({hover: false})}
                >
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
