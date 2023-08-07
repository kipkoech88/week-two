import React from 'react'
import Home from './Home'

function App({pagename}) {
  if(pagename === "Home") return <Home/>
  if (pagename === "Speaker") return <></>
  else return <div>Not found</div>
}

export default App
