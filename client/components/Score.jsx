import React from 'react'
import { connect } from 'react-redux'
import { updateScore } from '../actions/players'
import { showScore } from '../actions/score'

class Score extends React.Component {

  givePoints = e => {
    this.props.dispatch(updateScore(this.props.id))
    this.props.dispatch(showScore(false))
  }

  noPoints = e => {
    this.props.dispatch(showScore(false))
  }

  render() {
    return (
      <div className='score'>
        <h1>Give {this.props.name} a score</h1>
        <button id='amazing' onClick={this.givePoints}>Amazing</button>
        <button id='rubbish' onClick={this.noPoints}>Rubbish</button>
      </div>

    )
  }
}

function mapStateToProps(globalState) {
  const activePlayer = globalState.players.filter(player => player.isActive)

  console.log()
  return {
    ...activePlayer[0]
  }
}

export default connect(mapStateToProps)(Score)