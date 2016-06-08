import React from 'react'
import { Portal } from 'react-overlays'
import { render } from 'react-dom'

const CONTAINER_STYLE = { backgroundColor: 'green' }

class PortalExample extends React.Component {
  render () {
    return (
      <div>
        {/* container is defined and it is displayed
            with a green bg. */}
        <p>Success:</p>
        <div ref='container' style={CONTAINER_STYLE} />
        <Portal container={() => this.refs.container}>
          <p>Hello!</p>
        </Portal>

        {/* Here, container2 ref is undefined and it
            is displayed in body. */}
        <p>Fail:</p>
        <Portal container={() => this.refs.container2}>
          <p>Hello!</p>
        </Portal>
        <div ref='container2' style={CONTAINER_STYLE} />
      </div>
    )
  }
}

render(
  <PortalExample />,
  document.getElementById('app')
)
