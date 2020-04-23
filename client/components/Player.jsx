import React from 'react'
import { connect } from 'react-redux'



class Player extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className='player'>
        <span>
          {this.props.player.isActive &&
            <i className="fas fa-arrow-right"></i>
          }
        </span>
        <p>{this.props.player.name}</p>
        <p>{this.props.player.score}</p>
      </div>
    )
  }
}

function mapStateToProps(globalState, ownProps) {
  return {
    player: globalState.players[ownProps.id]
  }
}

export default connect(mapStateToProps)(Player)