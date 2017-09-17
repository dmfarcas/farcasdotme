import React from 'react'
import PropTypes from 'prop-types';

import './CommandLine.css';

export const Output = (props) => {
  const output = props.output;

  return (
    <div>
      <pre>{output}</pre>
    </div>
  )
}


Output.propTypes = {
  output: PropTypes.string,
}
