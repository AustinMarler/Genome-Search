import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import FileDrop from './FileDrop'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FileDrop />
      </Provider>
    )
  }
}

export default App
