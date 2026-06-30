import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//writing the function here instead of ap,jsx
function MyApp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}

//html type syntax(render fails)
const OneElement = {
    type:'a',
    props:{
        href : 'https://www.google.com',
        target : '_blank'
    },
    children:'click to visit google'
}

//other syntax
const AnotherElement = (
  <a href="https://google.com" target='_blank'>enter google</a>
)

//react type syntax
const user = ' afzal'
const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'goooooogle',
  user
)

createRoot(document.getElementById('root')).render(
  ReactElement
)
