import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    //binding
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }
  handleClickPlus() {
    // this.setState({ count: this.state.count + 1 });
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleClickMinus() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={this.handleClickPlus}> Add one! </button>
        <br />
        <button onClick={this.handleClickMinus}> Minus one! </button>
      </div>
    );
  }
}

export default App;
