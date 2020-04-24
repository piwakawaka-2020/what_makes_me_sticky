import React from 'react'
import { connect } from 'react-redux'

import PlayerForm from './PlayerForm'
import ScoreBoard from './ScoreBoard'
import Score from './Score'
import GifList from './GifList'
import SelectionArea from './SelectionArea'

import { fetchGifs, getRandomCard } from '../actions/index'
import Question from './Question'


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getRandomCard())
      .then(question => {
        this.props.dispatch(fetchGifs(question))
      })
  }

  render() {
    return (
      <div>
        <h1 id='title'>Gifs against humanity</h1>
        {
          this.props.players.length < 1 &&
          <PlayerForm />
        }
        {
          this.props.players.length > 0 ?
            <>
              <Question />
              <div id='topBand'>
                {this.props.score &&
                  <Score />}
                <SelectionArea />
                <ScoreBoard />
              </div>
              <GifList /></> : <></>
        }
      </div>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    players: globalState.players,
    score: globalState.score,
    question: globalState.question
  }
}
export default connect(mapStateToProps)(App)
