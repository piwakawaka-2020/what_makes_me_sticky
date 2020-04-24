import React from 'react'
import { connect } from 'react-redux'
import { updateScore, setActivePlayer } from '../actions/players'
import { showScore } from '../actions/score'

class Score extends React.Component {

  givePoints = e => {
    this.props.dispatch(updateScore(this.props.id))
    this.changePlayer()
  }

  changePlayer() {
    this.props.dispatch(showScore(false))

    let newId = this.props.id + 1

    if (newId > this.props.playerNum - 1) {
      newId = 0
    }
    this.props.dispatch(setActivePlayer(this.props.players, newId))
  }

  render() {
    return (
      <div className='score'>
        <h1>Give {this.props.name} a score</h1>
        <button onClick={this.givePoints}>Amazing</button>
        <button onClick={this.changePlayer}>Rubbish</button>
      </div>

    )
  }
}

function mapStateToProps(globalState) {
  const activePlayer = globalState.players.filter(player => player.isActive)
  // const playerNum = globalState.players.length

  console.log()
  return {
    ...activePlayer[0],
    players: globalState.players,
    playerNum: globalState.players.length
  }
}

export default connect(mapStateToProps)(Score)