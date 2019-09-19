// add https://www.npmjs.com/package/natural
import axios from "axios";
import React, { Component } from "react";
import { Segment, Label, Popup } from "semantic-ui-react";
import "./Example.css";

import MainScreen from "./MainScreen.js";

import Autosuggest from "react-autosuggest";

import { getSource } from "./Keys_n_Clauses";

const inputStyle = {
  padding: "5px 5px",

  border: "1px solid ",
  borderRadius: "2px"
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


  //search for keywords
  if (inputLength < 1) {
    return source;
  } else {
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
const getSuggestionValue = suggestion => "Selected: " + suggestion.clause;


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
      selectedKeyword: false
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
      selectedKeyword: e.target.className.slice(9)
    });
  };

  // Rendering suggestions

  //renderSuggestionsContainer
  renderSuggestion = suggestion => (
    <Popup
      content={suggestion.description}
      trigger={
        <Segment>
          <b>{suggestion.clause}</b>

          <div>
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
      }
    />
  );

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: source,
      selectedKeyword: false
    });
  };

  onSuggestionSelected = (e, { suggestionValue }) => {
    this.setState(
      //substr to remove ui id
      { value: "", selectedClause: suggestionValue.substr(10) },
      () =>
        this.setState({ suggestions: source }, () => {
          this.setState({ selectedKeyword: false });
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
      .get("https://api.myjson.com/bins/hp9mp")
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

            width: "60%"
          }}
        >
          <MainScreen
            data={this.state.data}
            selectedClause={this.state.selectedClause}
            selectedKeyword={this.state.selectedKeyword}
          />
        </div>
      </React.Fragment>
    );
  }
}
