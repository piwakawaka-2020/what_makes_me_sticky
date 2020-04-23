import React from 'react'
import { connect } from 'react-redux'



class Player extends React.Component {
  
  render() {
    return (
      <div className='player'>
        <span>
          {this.props.isActive &&
            <i className="fas fa-arrow-right"></i>
          }
        </span>
        <p>{this.props.name}</p>
        <p>{this.props.score}</p>
      </div>
    )
  }
}

function mapStateToProps(globalState, ownProps) {
  return {
    ...globalState.players[ownProps.id]
  }
}

export default connect(mapStateToProps)(Player)