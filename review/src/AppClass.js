import React from "react";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    };
    console.log("AppClass: Component Constructed");
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  componentDidMount() {
    console.log("AppClass: Component Mounted");
  }

  componentDidUpdate() {
    console.log("AppClass: Component did update");
  }

  render() {
    console.log("AppClass: Component rendered");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
