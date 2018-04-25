import React, { Component } from 'react'
// import { Provider } from 'react-redux'
import ChessBoard from '../component/chessBoard/chessBoard'
import { hashHistory, browserHistory, Router, Switch } from 'react-router'
import './App.css'


class App extends Component {
  render() {
    // const { store } = this.props
    return (
      <div className="App">
          <ChessBoard />
      </div>
    )
  }
}

export default App
