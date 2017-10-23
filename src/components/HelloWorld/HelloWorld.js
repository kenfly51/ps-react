import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.PureComponent {
    render() {
      return (<div>Hello {this.props.message}</div>);
    }
}

HelloWorld.propTypes = {
  message: PropTypes.string,
}

export default HelloWorld;
