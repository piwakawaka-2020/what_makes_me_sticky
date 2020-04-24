import React from 'react'
import { connect } from 'react-redux'

class Score extends React.Component {

  render() {
    return (
      <div className='score'>
        <h1>Give {this.props.activePlayer} a score</h1>
      </div>

    )
  }
}

function mapStateToProps(globalState) {
  const activePlayer = globalState.players.filter(player => player.isActive)

  if(activePlayer[0]) {
    return {
      activePlayer: activePlayer.name
    }
  }
}

export default connect(mapStateToProps)(Score)