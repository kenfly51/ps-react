import React from 'react'
import PropTypes from 'prop-types';

const Props = ({props}) => {
  return (
    <table className="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props).map(key => {
            const prop = props[key];
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{prop.description}</td>
                <td>{prop.type.name}</td>
                <td>{prop.defaultValue && prop.defaultValue.value}</td>
                <td>{prop.required && 'X'}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
}

export default Props