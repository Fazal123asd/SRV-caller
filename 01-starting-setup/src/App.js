import React from "react";
import SearchField from './searchField/SearchField'
import Editor from './Editor/Editor'
function App() {
  const [requestJs, setRequestJs] = React.useState('')
  const [responseJs, setResponseJs] = React.useState('')
  return (
    <>
      <SearchField />
      <div className='pane top-pane"'>
        <Editor displayName={'Request'}
        value={requestJs}
        onChange={setRequestJs}
        />
        <Editor displayName={'Response'}
         value={responseJs}
         onChange={setResponseJs}
        />
      </div>

    </>
  );
}

export default App;
