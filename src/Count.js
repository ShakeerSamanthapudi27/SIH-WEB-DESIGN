import React from "react";
export default class Count extends React.Component {
  constructor() {
    
    super();
    this.state = { val: 0 }; 
    
  }

  change = () => {
    this.setState({ val: this.state.val + 1 });
    
    
  };

  setzero = () =>
  {
    this.setState({val: 0})
    document.getElementById("p1").style.color = "red";
  }

  render() {
    return (
      <div>
        <button onClick={this.change}>Click to Increase</button>
        <p id="p1">Current Value: {this.state.val}</p> {/* Display the current value */}
        <button onClick={this.setzero}>Reset</button>
      </div>
    );
  }
}
