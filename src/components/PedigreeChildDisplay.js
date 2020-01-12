import React from "react";
import PedigreePersonDisplay from "./PedigreePersonDisplay";
import {findChildren} from "../services/buildPedigree";

class PedigreeChildDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: findChildren(this.props.person),
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props){
            this.setState({
                children: findChildren(this.props.person),
            })
        }
    }

    render() {
        return (
            <div style={{flexGrow: 1, textAlign: "center"}}>
                <PedigreePersonDisplay person={this.props.person} onClick={this.props.onClick}/>
                {this.state.children.length > 0 &&
                <div style={{textAlign: "center"}}>
                    {this.state.children.length === 1 ?
                        "+ 1 child" :
                        "+ " + this.state.children.length + " children"
                    }
                </div>
                }

            </div>
        );
    }
}

export default PedigreeChildDisplay;
