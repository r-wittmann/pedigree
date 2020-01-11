import React from "react";
import {FormGroup, FormControl} from "react-bootstrap";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value);
        event.preventDefault();
    };

    render() {
        return (
            <div style={{padding: 10}}>
                <FormGroup>
                    <FormControl
                        type="test"
                        placeholder="Search for a last name..."
                        value={this.props.searchTerm}
                        onChange={this.handleChange}
                    />
                </FormGroup>
            </div>
        )
    }
}

export default SearchBar;