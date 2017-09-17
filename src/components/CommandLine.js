import React from 'react'
import './CommandLine.css';

export const CommandLine = (props) => {
  return (
    <div>
      <form autoComplete="off" onSubmit={props.handleSubmit}>
      <label htmlFor="input">$</label>
        <input type="text" id="input" onChange={props.handleInputChange} value={props.commandLine}/>
      </form>
    </div>
  )
}
