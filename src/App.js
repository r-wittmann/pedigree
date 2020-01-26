import React from 'react';
import SearchBar from "./components/SearchBar";
import {fuzzySearch, searchById} from "./services/search"
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
        this.onHashChange = this.onHashChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener("hashchange", (event) => this.onHashChange(event.target.location.hash.substr(1)), false);
        if (window.location.hash) {
            this.onHashChange(window.location.hash.substr(1))
        }
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", (event) => this.onHashChange(event.target.location.hash.substr(1)), false);
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
        if (person.personId !== 10000) {
            window.location.hash = person.personId;
        } else {
            window.alert("This person can't be selected");
        }
    };

    onHashChange = (hash) => {
        if (hash && hash != this.state.selectedPerson.personId) {
            this.setState({
                searchTerm: "",
                autocompleteSuggestions: [],
                selectedPerson: searchById(hash)
            });
        }
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
                    <Pedigree selectedPerson={this.state.selectedPerson} onClick={this.onSuggestionClick}/>
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
