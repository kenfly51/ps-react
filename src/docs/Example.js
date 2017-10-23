import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
  state = {
    showCode: false
  }

  toggleCode = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

Example.propTypes = {

};

export default Example;