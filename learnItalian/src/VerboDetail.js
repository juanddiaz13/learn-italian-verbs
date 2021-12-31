import React from "react";
import ReactDOM from "react-dom";
import * as ItVerbs from "italian-verbs";
import ItalianVerbsList from "italian-verbs-dict/dist/verbs.json";

class VerboDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unoS: "",
      dosS: "",
      tresS: "",
      unoP: "",
      dosP: "",
      tresP: "",
    };
  }

  darConjugacion(numPro, sinOPlu) {
    console.log(this.props.verbo);
    return ItVerbs.getConjugation(
      ItalianVerbsList,
      this.props.verbo,
      this.props.tiempo,
      numPro,
      sinOPlu
    );
  }

  render() {
    return (
      <div class="content">
        <h4 class="ui sub header">Activity</h4>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                {" "}
                <h2>io {this.darConjugacion(1, "S")}</h2>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">tu {this.darConjugacion(2, "S")}</div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">lui/elle {this.darConjugacion(3, "S")} </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">noi {this.darConjugacion(1, "P")}</div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">voi {this.darConjugacion(2, "P")}</div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">loro {this.darConjugacion(3, "P")}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerboDetail;
