import React from 'react'
import { setActivePlayer } from '../actions/players'
import { connect } from 'react-redux'
import Player from './Player'

class ScoreBoard extends React.Component {

  componentDidMount() {
    this.props.dispatch(setActivePlayer(this.props.players, 0))
  }


  render() {
    return (
      <div className='scoreBoard'>
        <h1>Score Board</h1>
        {
          this.props.players.map(player => {
            return <Player key={player.id} id={player.id}/>
          })
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

export default connect(mapStateToProps)(ScoreBoard)