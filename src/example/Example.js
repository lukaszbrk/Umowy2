import axios from "axios";
import React, { Component } from "react";
import { Grid, Segment, Label } from "semantic-ui-react";
import "./Example.css";

import MainScreen from "./MainScreen.js";

import Autosuggest from "react-autosuggest";

let source = [
  {
    clause: "Commencement",
    keywords: [
      "enter into",
      "zawrzeć",
      "National Court Register",
      "Krajowy Rejestr Sądowy",
      "share capital",
      "kapitał zakładowy",
      "REGON",
      "National Business Registry Number",
      "test",
      "test2"
    ]
  },
  {
    clause: "Recitals",
    keywords: [
      "therefore",
      "whereas",
      "covenant",
      "zobowiązać się",
      "zważywszy"
    ],
    other: ""
  },
  {
    clause: "Definitions",
    keywords: ["definitions", "definicje", "meaning", "termin", "terms", "test",  "test2"]
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  //TODO check every word in the input
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

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

  let found_clauses = [];
  let found_keywords = [];

  if (inputLength < 1) {
    return source;
  } else {
    source.map(entry =>
      entry.keywords.map(keyword =>
        keyword.toLowerCase().includes(inputValue)
          ? found_keywords.push(entry)
          : {}
      )
    );

    found_clauses = source.filter(lang =>
      lang.clause.toLowerCase().includes(inputValue)
    );
    //console.log(found_clauses)
    //console.log(found_keywords)

    const all = found_clauses.concat(found_keywords);

    //console.log( {...found_clauses.clause, ...found_keywords.clause})
    return getUnique(all, "clause");
  }
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => "Selected: " + suggestion.clause;

///state
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



  onClickLabel = e => {
    e.stopPropagation();
    //console.log((e.target.className).slice(9))

    this.setState({
      selectedKeyword: e.target.className.slice(9)
    });
  };
  // Use your imagination to render suggestions.
  renderSuggestion = suggestion => (
    <Segment>
      {suggestion.clause}

      <div style={undefined}>
        {suggestion.keywords.map(keyword => (
          <Label onClick={this.onClickLabel} className={keyword} key={keyword}>
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
  // You already implemented this logic above, so just use it.
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

  onSuggestionSelected = (e, { suggestionValue, suggestionIndex }) => {
    //TODO clicking again returns 0, selectedKeyword: false
    //console.log(suggestionValue.substr(10));
    this.setState(
      { value: "", selectedClause: suggestionValue.substr(10) },
      () =>
        this.setState({ suggestions: source }, () => {

            this.setState({ selectedKeyword: false });
 
        })
    );
  };

  componentWillMount() {
    axios
      .get("https://my-json-server.typicode.com/lukaszbrk/clauses/db")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {

    console.log("rendering Example screen")
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Klauzula, słowo kluczowe",
      value,
      onChange: this.onChange
    };

    // Finally, render it!

    return (
      <Grid>
        <Grid.Column width={6}>
          <Autosuggest
            alwaysRenderSuggestions={true}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            focusInputOnSuggestionClick={false}
            //highlightFirstSuggestion={true}
          />
        </Grid.Column>
        <MainScreen
          data={this.state.data}
          selectedClause={this.state.selectedClause}
   
          // add https://www.npmjs.com/package/natural via nodejs
          selectedKeyword={this.state.selectedKeyword}
        />
      </Grid>
    );
  }
}
