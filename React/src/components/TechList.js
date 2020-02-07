import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: ['Node', 'Java', 'C++', 'Js'],
  };

  render() {
    return (
      <ul>
        {this.state.techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    );
  }
}

export default TechList;
