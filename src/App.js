import React from 'react';
import SearchBar from "./components/SearchBar";
import {fuzzySearch} from "./services/fuzzySearch"

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

        if (searchTerm.length < 3) {
            this.setState({
                autocompleteSuggestions: {
                    firstNameResult: [],
                    lastNameResult: [],
                    dissertationTitleResult: [],
                },
            });
            return;
        }

        let resultObject = {
            firstNameResult: fuzzySearch(searchTerm, ["firstName"]),
            lastNameResult: fuzzySearch(searchTerm, ["lastName"]),
            dissertationTitleResult: fuzzySearch(searchTerm, ["dissertationTitle"]),
        };

        this.setState({
            autocompleteSuggestions: resultObject,
        })

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
