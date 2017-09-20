import React from 'react'
import PropTypes from 'prop-types';

import './CommandLine.css';

export const CommandLine = (props) => {
  return (
    <div>
      <form autoComplete="off" onSubmit={props.handleSubmit}>
      <label htmlFor="input">$</label>
        <input
          type="text"
          id="input"
          onChange={props.handleInputChange}
          value={props.commandLine}
          onKeyDown={props.onKeyDown}
        />
      </form>
    </div>
  )
}

CommandLine.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string
}
