import "./styles.css";
import React, { Component } from "react";
import Projects from "./components/projects";

class App extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch(
      "https://rqom69p957.execute-api.eu-west-3.amazonaws.com/prod/projects"
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(JSON.parse(data.body));
        this.setState({ projects: JSON.parse(data.body) });
      })
      .catch(console.log);
  }

  render() {
    return <Projects projects={this.state.projects} />;
  }
}

export default App;
