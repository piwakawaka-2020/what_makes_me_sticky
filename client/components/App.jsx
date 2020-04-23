import React from 'react'
import { connect } from 'react-redux'

import PlayerForm from './PlayerForm'
import ScoreBoard from './ScoreBoard'

class App extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.players.length < 1 &&
          <PlayerForm />
        }
        {
          this.props.players.length > 0 &&
          <ScoreBoard />
        }
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
