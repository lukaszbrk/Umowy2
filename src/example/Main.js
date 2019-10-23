//TODO

// Demo
// fix unique keys errors
// escape regex
// use memo
// main too bloated
// move top button
// polish chars regex
// fix state onclick and search
// fix regex
// add data validating tools
// left right arrows for pagination
// review showKeywords state
// review examples
// prepare form to add content for users
// rewrite prepDataforKeywordSelectionScreen as db query

// bug when browsing examples; look into activepage
/*
 <p>
        Słowa kluczowe:{" "}
        {_data[activePage - 1].keywords.map(keyword => (
          <i>{"#" + keyword + " "}</i>
        ))}
        */

import axios from "axios";
import React, { Component, Ref } from "react";
import { Segment, Label, Modal, Button } from "semantic-ui-react";
import "./Autosuggest.css";
import "./showSuggestions.css";

import ScreenSelection from "./Base/ScreenSelection.js";

import Autosuggest from "react-autosuggest";

import { getSource } from "./Keys_n_Clauses";

const inputStyle = {
  padding: "5px 5px",

  border: "1/2px solid ",
  //borderRadius: "3px"
};

const calcExamples = data => {
  let clause;
  let counter = 0;

  for (clause in data["Clauses"]) {
    counter = counter + Object.keys(data["Clauses"][clause]["Examples"]).length;
  }

  return counter;
};

//Clauses and keywords

let source = getSource();

//

const filtering = (input, word) => {
  
  var rgxp = new RegExp("(^"+input+")|(\\s"+input+")", "gi");
  if (word ==="share capital") {

    console.log(rgxp)
  }

  if (word.match(rgxp)) {
   
    return true;
  } else {
    return false;
  }
};

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
    //search for keywords
    source.map(entry =>
      entry.keywords.pl.concat(entry.keywords.en).map(keyword =>
        filtering(inputValue, keyword)
        //keyword.toLowerCase().includes(inputValue, 0) //replace with regex or split
          ? //filtering(inputValue, keyword)
            found_keywords.push(entry)
          : {}
      )
    );
    //search for clauses
    found_clauses = source.filter(
      lang => filtering(inputValue, lang.clause)
      //lang =>  lang.clause.toLowerCase().includes(inputValue)
    );

    const clauses_n_keywords = found_clauses.concat(found_keywords);

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

    return getUnique(clauses_n_keywords, "clause");
  }
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.clause;

export default class SearchExampleStandard extends Component {
  constructor() {
    super();
    this.myRef = React.createRef() 

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
      showKeywords: false
     
    };

    this.baseState = this.state
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
      showKeywords: false
    });
  };

  // Rendering suggestions

  //renderSuggestionsContainer
  renderSuggestion = (suggestion, isHighlighted) => (
    <Segment className="hover">
      <p>
        {/*rendering clauses*/}
        {suggestion.clause}
      </p>
      <p>
        <small>
          <i>{suggestion.description}</i>
        </small>
      </p>

      <div className={this.state.showKeywords ? "_visible" : "notvisible"}>
        {/*rendering keywords*/}
        {this.sortAlph(suggestion.keywords.pl).map(keyword => (
          <Label
            style={
              keyword.search(
                new RegExp("^" + this.state.value + "|\\b" + this.state.value,
                "gi")
              ) !== -1 && this.state.value.length > 1
                ? { marginTop: "2px", backgroundColor: "#fbbd08" }
                : { marginTop: "2px" }
            }
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
            style={
              keyword.search(
                new RegExp( "^" + this.state.value + "|\\b" + this.state.value,
                "gi")
              ) !== -1 && this.state.value.length > 1
                ? { marginTop: "2px", backgroundColor: "#fbbd08" }
                : { marginTop: "2px" }
            }
    
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

 //hide keywords when input length is 0
    hideKeywords = () => {
    
      if (this.state.value.length ===0) {

        this.setState({showKeywords: false} )
      }  else {
  
  
      }
    };
  // Autosuggest will call this function every time you need to update suggestions.
  //

    
  onChange = (event, { newValue }) => {
    this.setState(this.setState({ value: newValue }, ()=>{this.hideKeywords()}));
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ showKeywords: true }, () => {
      this.setState({ suggestions: getSuggestions(value) });
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.

  //review this
  onSuggestionsClearRequested = () => {
    this.setState({ showKeywords: false }, () =>
      this.setState({ selectedKeyword: false }, () => {
        this.setState({ suggestions: source });
      })
    );
  };
  onSuggestionSelected = (e, { suggestionValue }) => {
    this.setState({ value: "", selectedClause: suggestionValue }, () =>
      this.setState({ showKeywords: false }, () => {
        this.setState({ selectedKeyword: false }, () => {
          this.setState({ suggestions: source });
        });
      })
    );
  };

  //needed for focusing
  storeInputReference = autosuggest => {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
      console.log(this.input )
    }
  };


  componentDidMount() {

    //focusing on input component

    //this.input.focus();
    // query server for file size
    if (!sessionStorage.getItem("data")) {
      axios
        .get("https://api.myjson.com/bins/sa5ob")
        .then(res => {
          this.setState({ data: res.data }, () => {
            sessionStorage.setItem("data", JSON.stringify(this.state.data));
          });
        })
        .catch(err => console.log(err));
    } else {
      let temp = sessionStorage.getItem("data");
      let q = JSON.parse(temp);

      this.setState({ data: q });
    }
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
            //ref={this.storeInputReference} 
          
         
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
          <ScreenSelection
            data={this.state.data}
            selectedClause={this.state.selectedClause}
            selectedKeyword={this.state.selectedKeyword}
          />
        </div>
        <Modal
          trigger={
            <Button
              small="true"
              style={{
                position: "fixed",
                bottom: 10,
                right: 5
              }}
            >
              Informacje o stronie
            </Button>
          }
        >
          <Modal.Content>
            <p>Liczba przykładów klauzul: {calcExamples(this.state.data)}</p>
            <p>
              Wersja demonstracyjna strony do wyszukiwania typowych klauzul w
              umowach gospodarczych w j. polskim i angielskim. Prawie wszystkie
              przykłady zostały przetłumaczona przez autora strony.{" "}
            </p>{" "}
            <p>
              <b>
                {" "}
                Kontakt:{" "}
                <a href="mailto:borkowskil@outlook.pl">borkowskil@outlook.pl</a>
              </b>
            </p>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}
