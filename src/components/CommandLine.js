import React from 'react';
import PropTypes from 'prop-types';

import './CommandLine.css';
import logo from '../assets/loader_big_w.gif';

export const CommandLine = props => {
  return (
    <div>
      <form autoComplete="off" onSubmit={props.handleSubmit}>
        {props.loading ? (
          <img className="loading" src={logo} alt="loading" />
        ) : (
          ''
        )}
        <label htmlFor="input">{!props.loading ? '$' : 'Loading ...'}</label>
        <input
          hidden={props.loading}
          type="text"
          id="input"
          onChange={props.handleInputChange}
          value={props.commandLine}
          onKeyDown={props.onKeyDown}
        />
      </form>
    </div>
  );
};

CommandLine.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
