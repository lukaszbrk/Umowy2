//TODO
// add https://www.npmjs.com/package/natural
// add highlighting labels when searching
// fix regex
// add data validating tools
// left right arrows for pagination
// review showwords state
// show all tags for the example in the clause
// preview screen for clauses
// local storage
// review examples
// stats w modalu

import axios from "axios";
import React, { Component, Ref } from "react";
import { Segment, Label, Modal, Button } from "semantic-ui-react";
import "./Example.css";
import "./test.css";

import MainScreen from "./MainScreen.js";

import Autosuggest from "react-autosuggest";

import { getSource } from "./Keys_n_Clauses";

const inputStyle = {
  padding: "5px 5px",

  border: "1/2px solid ",
  borderRadius: "3px"
};

//Clauses and keywords

let source = getSource();

// How to calculate suggestions for any given input value.
const getSuggestions = value => {
  //TODO check every word in the input
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  let found_clauses = [];
  let found_keywords = [];

  if (inputLength < 1) {
    //this.setState({showWords: false})

    return source;
  } else {
    //search for keywords
    source.map(entry =>
      entry.keywords.pl
        .concat(entry.keywords.en)
        .map(keyword =>
          keyword.toLowerCase().includes(inputValue)
            ? found_keywords.push(entry)
            : {}
        )
    );
    //search for clauses
    found_clauses = source.filter(lang =>
      lang.clause.toLowerCase().includes(inputValue)
    );

    const all = found_clauses.concat(found_keywords);

    //remove duplicates (copy pasted)
    function getUnique(arr, comp) {
      //store the comparison values in array
      const unique = arr
        .map(e => e[comp])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & return unique objects
        .filter(e => arr[e])
        .map(e => arr[e]);

      return unique;
    }

    return getUnique(all, "clause");
  }
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.clause;

export default class SearchExampleStandard extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: source,
      data: "",
      selectedClause: false, //changed
      resetPagination: false,
      selectedKeyword: false,
      showWords: false
    };
  }
  //sort keywords
  sortAlph = arr => {
    arr.sort(function(x, y) {
      var a = String(x).toUpperCase();
      var b = String(y).toUpperCase();
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });

    return arr;
  };

  onClickLabel = e => {
    // prevents referring to the parent
    e.stopPropagation();

    this.setState({
      selectedKeyword: e.target.className.slice(9),
      showWords: false
    });
  };

  // Rendering suggestions

  //renderSuggestionsContainer
  renderSuggestion = (suggestion, isHighlighted) => (
    <Segment className="image-hover-opa">
      <p>
        {" "}
        <b>{suggestion.clause}</b>
      </p>
      <p>
        <small>
          <i>{suggestion.description}</i>
        </small>
      </p>

      <div
        className={
          this.state.showWords ? "image-hover-opacity2" : "image-hover-opacity"
        }
      >
        {this.sortAlph(suggestion.keywords.pl).map(keyword => (
          <Label
            style={{ marginTop: "2px" }}
            onClick={this.onClickLabel}
            className={keyword}
            key={keyword}
          >
            {keyword}
          </Label>
        ))}
        <br />
        {this.sortAlph(suggestion.keywords.en).map(keyword => (
          <Label
            style={{ marginTop: "2px" }}
            onClick={this.onClickLabel}
            className={keyword}
            key={keyword}
          >
            {keyword}
          </Label>
        ))}
      </div>
    </Segment>
  );

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  //
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ showWords: true }, () => {
      this.setState({ suggestions: getSuggestions(value) });
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.

  /*
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: source,
      selectedKeyword: false,
      showWords: false
    });
  };
*/

  onSuggestionsClearRequested = () => {
    this.setState({ showWords: false }, () =>
      this.setState({ selectedKeyword: false }, () => {
        this.setState({ suggestions: source });
      })
    );
  };
  onSuggestionSelected = (e, { suggestionValue }) => {
    this.setState({ value: "", selectedClause: suggestionValue }, () =>
      this.setState({ showWords: false }, () => {
        this.setState({ selectedKeyword: false }, () => {
          this.setState({ suggestions: source });
        });
      })
    );
  };

  /* renderSuggestionsContainer = ({ containerProps, children, query }) => (
    <div {...containerProps}>
        {
        <div style={{position:'relative'}}>
          
          <br/>
     
        </div>
      }
      {children}
    
    </div>
  );
*/
  componentDidMount() {
    // db/local storage
    axios
      .get("https://api.myjson.com/bins/c8svj")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    //console.log("Rendering Example screen");
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Klauzula, słowo kluczowe",
      value,
      onChange: this.onChange,
      style: inputStyle
    };

    return (
      <React.Fragment>
        <div style={{ height: "100%", width: "30%", left: 0 }}>
          <Autosuggest
            menuStyle={inputStyle}
            alwaysRenderSuggestions={true}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            focusInputOnSuggestionClick={false}
            //renderSuggestionsContainer={this.renderSuggestionsContainer}
            //highlightFirstSuggestion={true}
          />
        </div>
        {/*TODO add menu below; add styling */}
        <div
          style={{
            position: "fixed",
            right: 5,
            top: 20,
            width: "60%"
          }}
        >
          <MainScreen
            data={this.state.data}
            selectedClause={this.state.selectedClause}
            selectedKeyword={this.state.selectedKeyword}
          />
        </div>
        <Modal
          trigger={
            <Button small
              style={{
                position: "fixed",
                bottom: 0,
                right: 5
              }}
            >
              Informacje o stronie
            </Button>
          }
        >
          <Modal.Content>
            <p>
              Wersja demonstracyjna strony do wyszukiwania typowych klauzul w
              umowach gospodarczych w j. polskim i angielskim. Strona została
              opracowana przez tłumacza, który uznał, że pamięci tłumaczeniowe i
              glosariusze należy uzupełnić o inne narzędzia. Większość
              przykładów została przetłumaczona przez autora strony. Strona jest
              nieustannie, lecz nieregularnie rozbudowywana.{" "}
            </p>{" "}
            <p>
              Będę wdzięczny za zgłoszenie błędów w tłumaczeniach czy też w
              budowie samej strony. Liczę też, że użytkownicy podzielą się
              własnymi tłumaczeniami, które chętnie dodam do zbioru, lub
              zaproponują nowe funkcje strony.  </p><p><b> Kontakt: <a href="mailto:borkowskil@outlook.pl">borkowskil@outlook.pl</a></b></p>
           
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}
