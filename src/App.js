import React from 'react';
import SearchBar from "./components/SearchBar";
import Fuse from "fuse.js";

const personData = require("./data/person_data");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        };
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
    }

    onSearchTermChange = (searchTerm) => {
        console.log(searchTerm);
        this.setState({
            searchTerm
        });

        if (searchTerm.length < 3) return;

        let options = {
            shouldSort: true,
            threshold: 0.2,
            location: 0,
            distance: 5,
            maxPatternLength: 32,
            minMatchCharLength: 3,
        };

        let resultObject = {
            firstNameResult: this.fuseSearch(searchTerm, options, ["fistName"]),
            lastNameResult: this.fuseSearch(searchTerm, options, ["lastName"]),
            dissertationTitleResult: this.fuseSearch(searchTerm, options, ["dissertationTitle"]),
        };

        console.log(resultObject);

    };

    fuseSearch = (searchTerm, options, keys) => {
        let fuse = new Fuse(personData, Object.assign({}, options, {keys}));
        return fuse.search(searchTerm, {limit: 10});
    };

    render() {
        return (
            <div>
                <SearchBar searchTerm={this.state.searchTerm} onChange={this.onSearchTermChange}/>
            </div>
        );
    }
}

export default App;
