import React from "react";
import {findParents, findChildren} from "../services/buildPedigree";
import PedigreePersonDisplay from "./PedigreePersonDisplay";
import ConnectingLine from "./ConnectingLine";
import PedigreeChildDisplay from "./PedigreeChildDisplay";

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
            <div key={this.props.selectedPerson.personId}>
                <div style={{display: "flex", padding: "25px 10px"}}>
                    {this.state.parents.map(parent =>
                        <>
                            <PedigreePersonDisplay key={parent.personId} person={parent} onClick={this.props.onClick}/>
                            <ConnectingLine key={parent.personId + parent.firstName} from={parent.personId}
                                            to={this.props.selectedPerson.personId}/>
                        </>
                    )}
                </div>
                <div style={{display: "flex", padding: "25px 10px"}}>
                    <PedigreePersonDisplay id={this.props.selectedPerson.personId} person={this.props.selectedPerson} center onClick={() => {}}/>
                </div>
                <div style={{display: "flex", padding: "25px 10px"}}>
                    {this.state.children.map(child =>
                        <>
                            <PedigreeChildDisplay key={child.personId} person={child} onClick={this.props.onClick}/>
                            <ConnectingLine key={child.personId + child.firstName}
                                            from={this.props.selectedPerson.personId}
                                            to={child.personId}/>
                        </>
                    )}
                </div>
            </div>
        )
    }
}

export default Pedigree;
