import React from 'react'
import PropTypes from 'prop-types';

import './Output.css';

export const Output = (props) => {
  const containerList = (outputList) => {
    const text = (output) => <pre className="text-output">{output}</pre>
    const picture = (output) => <img src={output} alt="output"/>

    const wrappedElementForType = (e) => {
      if (e.type === 'text') return text(e.output)
      if (e.type === 'picture') return picture(e.output)
    }

    return (outputList.map((e, i) => {
      return (
        <div key={i}>
          <span>$</span><pre className="text-input">{e.input}</pre>
          <br />
          <span>></span>{wrappedElementForType(e)}
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
