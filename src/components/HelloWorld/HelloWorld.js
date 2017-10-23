import React from 'react';
import PropTypes from 'prop-types';

/** Hello world compoent description*/
class HelloWorld extends React.PureComponent {
    render() {
      return (<div>Hello {this.props.message}</div>);
    }
}

HelloWorld.propTypes = {
  /** Description message a*/
  message: PropTypes.string, 
}

HelloWorld.defaultProps = {
  message: 'World',
}

export default HelloWorld;
