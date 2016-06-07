import React from 'react'
import { render } from 'react-dom'

const MyComponent = () => <h1>Hellow world!</h1>

render(
  <MyComponent />,
  document.getElementById('app')
)
