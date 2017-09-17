import React from 'react'
import './CommandLine.css';

export const Output = (props) => {
  const output = props.output;

  return (
    <div>
      <pre>{output}</pre>
    </div>
  )
}
