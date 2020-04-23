import React from 'react'

import GifList from './GifList'
import SelectionArea from './SelectionArea'

import {connect} from 'react-redux'

import {fetchGifs} from '../actions/index'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGifs())
  }

  render() {
    return (
      <>
      <h1>Gifs against humanity</h1>
      <SelectionArea />
      <GifList />
      </>
    )
  }
}

export default connect()(App)
