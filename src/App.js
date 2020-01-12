import React from 'react';
import SearchBar from "./components/SearchBar";
import {fuzzySearch} from "./services/fuzzySearch"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            autocompleteSuggestions: [],
            selectedPerson: {},
        };
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.onSuggestionClick = this.onSuggestionClick.bind(this);
    }

    onSearchTermChange = (searchTerm) => {
        this.setState({searchTerm});

        if (searchTerm.length < 3) {
            this.setState({
                autocompleteSuggestions: [],
            });
            return;
        }
        this.setState({
            autocompleteSuggestions: fuzzySearch(searchTerm, ["firstName", "lastName", "dissertationTitle"]),
        })
    };

    onSuggestionClick = (person) => {
        this.setState({
            searchTerm: "",
            autocompleteSuggestions: [],
            selectedPerson: person,
        })
    };

    render() {
        return (
            <div>
                <SearchBar
                    searchTerm={this.state.searchTerm}
                    suggestions={this.state.autocompleteSuggestions}
                    onChange={this.onSearchTermChange}
                    onSuggestionClick={this.onSuggestionClick}
                />
                {Object.keys(this.state.selectedPerson).length > 0 &&
                <div>
                    <div>
                        <span>{this.state.selectedPerson.firstName} </span>
                        <span>{this.state.selectedPerson.lastName}</span>
                    </div>
                    <div>
                        <span>{this.state.selectedPerson.dissertationTitle}, </span>
                        <span>{this.state.selectedPerson.dissertationYear}</span>
                    </div>
                    <div>
                        <span>{this.state.selectedPerson.schoolName}, </span>
                        <span>{this.state.selectedPerson.region}</span>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default App;
