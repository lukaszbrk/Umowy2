import axios from "axios";
import React, { Component } from "react";
import { Grid, Segment, Label, Popup } from "semantic-ui-react";
import "./Example.css";

import MainScreen from "./MainScreen.js";

import Autosuggest from "react-autosuggest";

//Clauses and keywords 

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
      "test", //rm
      "test2" //rm
    ],
    description: "Nazwa umowy wraz z oznaczeniem czasu i miejsca jej zawarcia",
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
    description: "Przedstawienie okolicznosci poprzedzających zawarcie umowy"
  },
  {
    clause: "Definitions",
    keywords: [
      "definitions",
      "definicje",
      "meaning",
      "termin",
      "terms",
      "test", //rm
      "test2" //rm
      
    ],
    description: "Definicje kluczowych terminöw",
  },

  {
    clause: "Warranties and Representations",
    keywords: [
      "gwarantować",
      "jakość",
      "warranty",
      "comply",
      "odpowiedzialność",
      "wada",
      "liable",
      "defect",
      "discovery",
      "notice",
      "szkody",
      "roszczenia",
      "zaniedbanie",
      "consequential",
      "claim",
      "injury"
      
    ],
    description: "Potwierdzenie prawdziwosci faktów, które skloniły je do przystąpienia do umowy; udzielenie rękojmi za ewentualne wady prawne lub wady fizyczne rzeczy, których umowa dotyczy",
 
  },

  {
    clause: "Force Majeure",
    keywords: [
      "okoliczności",
      "odpowiedzialność",
      "strajk",
      "liability",
      "stoppage",
      "circumstances",
      "notice"
    ],
    description: "Zdarzenia o charakterze przypadkowym lub naturalnym, nie do uniknięcia lub nad którym człowiek nie panuje",
  },
];

// How to calculate suggestions for any given input value.
const getSuggestions = value => {
  //TODO check every word in the input
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

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


    const all = found_clauses.concat(found_keywords);

      //copy pasted
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
    // prevents referring to the parent
    e.stopPropagation();

    this.setState({
      selectedKeyword: e.target.className.slice(9)
    });
  };


  // Rendering suggestions
  renderSuggestion = suggestion => (
    <Popup content= {suggestion.description}   trigger={<Segment>
      {suggestion.clause}

      <div style={undefined}>
        {suggestion.keywords.map(keyword => (
          <Label onClick={this.onClickLabel} className={keyword} key={keyword}>
            {keyword}
          </Label>
        ))}
      </div>
    </Segment>} />
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

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/1cv7tx")
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
      onChange: this.onChange
    };


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
