import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'
function MyApp(){
  <div>
    <h1>Hello</h1>
    <h2>World</h2>
  </div>
}

/*const reactElement={
    type : 'a',
    props:{
        href:'https://goggle.com',
        target:'_blank'
    },
    children:'Click here to visit goggle'
   }*/
const anotherUser = "Nishi"
  /* Creating element by React */const reactElement = React.createElement(
    /*tag*/ 'a',
    /*attibutes or properties */{href :"https.//goggle.com", target:"_blank"},
    /* Text or msg */"Click here to visit goggle",
    anotherUser
  )

   const anotherElement = (
    <a href='https.//goggle.com' target="_blank">Visit goggle</a>
   )
createRoot(document.getElementById('root')).render(
reactElement
)
