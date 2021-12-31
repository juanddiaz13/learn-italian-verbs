import React from "react";
import ReactDOM from "react-dom";

class Boton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tiempo: "" };
  }

  handleClick = () => {
    this.props.onClick(this.props.tiempo);
  };

  render() {
    return (
      <a
        class={this.props.btnAct == this.props.tiempo ? "item active" : "item"}
        onClick={this.handleClick}
      >
        {this.props.tit}
      </a>
    );
  }
}

export default Boton;
