import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props); //this.props = props
    console.log(props.message);
  }

  render() {
    return (
      <div>
        <div>{this.props.message}</div>
        <p>This is fine</p>
      </div>
    );
  }
}

export default Message;
