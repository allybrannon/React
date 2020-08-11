import React from "react";
import "./App.css";
import Message from "./Message";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedTimes: 0 };
  }
  whenClicked() {
    this.setState({ clickedTimes: this.state.clickedTimes + 1 });
    console.log("Click on child button" + this.state.clickedTimes);
  }
  render() {
    return (
      <div className="App">
        <p> Hello, World!</p>
        <Message message={"I am sending a message"} />
        <Button
          text="Click me!"
          whenClicked={this.whenClicked.bind(this)}
          clickedTimes={this.state.clickedTimes}
        />
      </div>
    );
  }
}

export default App;
