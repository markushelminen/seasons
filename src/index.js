import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        console.log(error);
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    return this.state.errorMessage && !this.state.lat ? (
      <div>Error: {this.state.errorMessage}</div>
    ) : !this.state.errorMessage && this.state.lat ? (
      <div>Latitude: {this.state.lat}</div>
    ) : (
      <div>Loading!</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
