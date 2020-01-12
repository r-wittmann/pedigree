import React from 'react';
import SearchBar from "./components/SearchBar";
import {fuzzySearch} from "./services/fuzzySearch"
import PersonInfoDisplay from "./components/PersonInfoDisplay";
import Pedigree from "./components/Pedigree";
import Footer from "./components/Footer";

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
                <div style={{paddingTop: 58, marginBottom: 58}}>
                    {Object.keys(this.state.selectedPerson).length > 0 &&
                    <PersonInfoDisplay person={this.state.selectedPerson}/>
                    }
                    {Object.keys(this.state.selectedPerson).length > 0 &&
                    <Pedigree selectedPerson={this.state.selectedPerson}/>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
