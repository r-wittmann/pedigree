import React from "react";

class Suggestions extends React.Component {

    render() {
        return (
            <div style={{
                position: "absolute",
                marginLeft: 10,
                marginTop: -10,
                marginRight: 10,
                border: "1px solid #cacaca",
                borderRadius: 4,
                width: "calc(80vw - 291px)",
                backgroundColor: "white"
            }}>
                <div style={{padding: 5}}>
                    {this.props.suggestions.map(result =>
                        <div
                            key={result.personId}
                            onClick={(event) => this.props.onClick(event, result)}
                            style={{cursor: "pointer"}}>
                            {`${result.firstName} ${result.lastName} - ${result.dissertationYear}, ${result.dissertationTitle}`}
                            <div style={{height: 1, width: "100%", backgroundColor: "#cacaca"}}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Suggestions;
