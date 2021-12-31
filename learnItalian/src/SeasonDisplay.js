import React from "react";
import ReactDOM, { render } from "react-dom";
import * as ItVerbs from "italian-verbs";
import ItalianVerbsList from "italian-verbs-dict/dist/verbs.json";
import VerboDetail from "./VerboDetail";
import Boton from "./Boton";

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = { verbo: "mangiare", btnAct: "PRESENTE" };
  }

  handleClick = (tiempo) => {
    this.setState({ btnAct: tiempo });
  };

  render() {
    console.log("LOG RENDER1 " + this.state.verbo);
    return (
      <div class="ui card">
        <div class="content">
          <div class="header">verbo: {this.props.verbo}</div>
        </div>
        <div class="header">
          <div class="ui three item menu">
            <Boton
              tit="Presente"
              btnAct={this.state.btnAct}
              tiempo="PRESENTE"
              onClick={this.handleClick}
            ></Boton>
            <Boton
              tit="Passato R."
              btnAct={this.state.btnAct}
              tiempo="PASSATO_REMOTO"
              onClick={this.handleClick}
            ></Boton>
            <Boton
              tit="Futuro S."
              btnAct={this.state.btnAct}
              tiempo="FUTURO_SEMPLICE"
              onClick={this.handleClick}
            ></Boton>
          </div>
        </div>
        <VerboDetail
          verbo={this.props.verbo}
          tiempo={this.state.btnAct}
        ></VerboDetail>
        <div class="extra content">
          <button class="ui button">Join Project</button>
        </div>
      </div>
    );
  }
}

export default SeasonDisplay;
