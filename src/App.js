import React from 'react';
import SearchBar from "./components/SearchBar";

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
    };

    render() {
        console.log(personData[3000].firstName, personData[3000].lastName);
        return (
            <div>
                <SearchBar searchTerm={this.state.searchTerm} onChange={this.onSearchTermChange}/>
            </div>
        );
    }
}

export default App;
