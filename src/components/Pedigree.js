import React from "react";
import {findParents, findChildren} from "../services/buildPedigree";
import PedigreePersonDisplay from "./PedigreePersonDisplay";

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
                        <PedigreePersonDisplay id={parent.personId} key={parent.personId} person={parent}/>
                    )}
                    {
                        // this.state.parents.map(parent => connection lines...)
                    }
                </div>
                <div style={{display: "flex", padding: "25px 10px"}}>
                    <PedigreePersonDisplay id={this.props.selectedPerson.personId} person={this.props.selectedPerson} highlight/>
                </div>
                <div style={{display: "flex", padding: "25px 10px"}}>
                    {this.state.children.map(child =>
                        <PedigreePersonDisplay id={child.personId} key={child.personId} person={child}/>
                    )}
                    {
                        // this.state.children.map(child => connection lines...)
                    }
                </div>
            </div>
        )
    }
}

export default Pedigree;
