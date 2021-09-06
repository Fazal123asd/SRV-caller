import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {
  const {
    value,
    displayName,
    onChange
  } = props
  

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={'editor-container'}>
        <div className="editor-title">
        {displayName}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        className="code-mirror-wrapper"
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: 'javascript',
          theme:'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}