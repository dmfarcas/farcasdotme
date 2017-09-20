import React from 'react'
import PropTypes from 'prop-types';

import './Output.css';

export const Output = (props) => {
  const containerList = (outputList) => {
    const text = (output) =>
    <div>
      <span>></span>
      <pre className="text-output">{output}</pre>
    </div>
    const picture = (output) => <img src={output} alt="output"/>

    const wrappedElementForType = (e) => {
      if (e.type === 'text') return text(e.output)
      if (e.type === 'picture') {
        return e.output ?  picture(e.output) : text(`Sorry, nothing found. :(`)
      }
    }

    return (outputList.map((e, i) => {
      return (
        <div key={i}>
          <span>$</span><pre className="text-input">{e.input}</pre>
          <br />
          {wrappedElementForType(e)}
        </div>
      )
    }))
  }



  const outputList = props.output;
  return (
    <div>
      {containerList(outputList)}
    </div>
  )
}


Output.propTypes = {
  output: PropTypes.array,
  outputType: PropTypes.string
}
