import React from "react";
import {findParents, findChildren} from "../services/buildPedigree";
import PedigreePersonDisplay from "./PedigreePersonDisplay";
import ConnectingLine from "./ConnectingLine";

class Pedigree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parents: findParents(this.props.selectedPerson),
            children: findChildren(this.props.selectedPerson),
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props){
            this.setState({
                parents: findParents(this.props.selectedPerson),
                children: findChildren(this.props.selectedPerson),
            })
        }
    }

    render() {
        return (
            <div>
                <div style={{display: "flex", padding: "25px 10px"}}>
                    {this.state.parents.map(parent =>
                        <PedigreePersonDisplay key={parent.personId} person={parent}/>
                    )}
                    {
                        this.state.parents.map(parent =>
                            <ConnectingLine key={parent.personId} from={parent.personId} to={this.props.selectedPerson.personId}/>
                        )
                    }
                </div>
                <div style={{display: "flex", padding: "25px 10px"}}>
                    <PedigreePersonDisplay id={this.props.selectedPerson.personId} person={this.props.selectedPerson} highlight/>
                </div>
                <div style={{display: "flex", padding: "25px 10px"}}>
                    {this.state.children.map(child =>
                        <PedigreePersonDisplay key={child.personId} person={child}/>
                    )}
                    {
                        this.state.children.map(child =>
                            <ConnectingLine key={child.personId} from={this.props.selectedPerson.personId} to={child.personId}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Pedigree;
