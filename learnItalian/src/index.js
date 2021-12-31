import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { verbo: "mangiare" };
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ verbo: event.target.value });
  }

  handleSubmit(event) {
    console.log("submit: " + this.element.value);
    this.setState({ verbo: this.element.value });

    event.preventDefault();
  }

  componentDidMount() {}

  componentDidUpdate() {}

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <h1>Ingrese un verbo (infinitivo) en italiano</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" ref={(el) => (this.element = el)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <SeasonDisplay verbo={this.state.verbo}></SeasonDisplay>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
