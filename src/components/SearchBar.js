import React from "react";
import {FormGroup, FormControl} from "react-bootstrap";
import Suggestions from "./Suggestions";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value);
        event.preventDefault();
    };

    handleSuggestionClick = (event, personData) => {
        this.props.onSuggestionClick(personData);
        event.preventDefault();
    };

    render() {
        return (
            <div style={{backgroundColor: "#8B2332", position: "fixed", width: "100vw"}}>
                <div style={{display: "flex", marginLeft: "10vw", marginRight: "10vw"}}>
                    <h2 style={{padding: 10, marginBottom: 0, color: "white"}}>MIS GENEALOGY</h2>
                    <div style={{flexGrow: 1}}>
                        <FormGroup style={{padding: 10, marginBottom: 0}}>
                            <FormControl
                                type="test"
                                placeholder="Search for a last name..."
                                value={this.props.searchTerm}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        {!!this.props.suggestions.length &&
                        <Suggestions suggestions={this.props.suggestions} onClick={this.handleSuggestionClick}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;
