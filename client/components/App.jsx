import React from 'react'
import { connect } from 'react-redux'

import PlayerForm from './PlayerForm'
import ScoreBoard from './ScoreBoard'
import Score from './Score'
import GifList from './GifList'
import SelectionArea from './SelectionArea'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Gifs against humanity</h1>
        {
          this.props.players.length < 1 &&
          <PlayerForm />
        }
        {
          this.props.players.length > 0 &&
          <>
          <ScoreBoard />
          <Score />
          </>
        }
        <SelectionArea />
        <GifList />
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    players: globalState.players
  }
}
export default connect(mapStateToProps)(App)
