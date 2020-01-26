import React from "react";

class ConnectingLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.calcStartEnd = this.calcStartEnd.bind(this);
    }

    componentDidMount() {
        this.calcStartEnd(this.props.from, this.props.to);
    }

    calcStartEnd = (fromId, toId) => {
        let from = document.getElementById(fromId);
        let fromBoundingRect = from.getBoundingClientRect();
        let fromX = (fromBoundingRect.left + fromBoundingRect.right) / 2;
        let fromY = fromBoundingRect.bottom;

        let to = document.getElementById(toId);
        let toBoundingRect = to.getBoundingClientRect();
        let toX = (toBoundingRect.left + toBoundingRect.right) / 2;
        let toY = toBoundingRect.top;

        this.setState({
            fromX,
            fromY,
            toX,
            toY,
        })
    };

    render(){
        return (
            <svg style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "calc(100vh - 58px",
                pointerEvents: "none",
                zIndex: -1
            }}>
                <line
                    x1={this.state.fromX}
                    y1={this.state.fromY}
                    x2={this.state.toX}
                    y2={this.state.toY}
                    style={{stroke: "#acacac", strokeWidth:1}} />
            </svg>
        )
    }
}

export default ConnectingLine;
