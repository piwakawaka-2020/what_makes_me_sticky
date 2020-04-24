import React from 'react'
import { connect } from 'react-redux'
import { setPlayers } from '../actions/players'

class PlayerForm extends React.Component {

  state = {

  }

  handleSubmit = e => {
    e.preventDefault()

    const players = Object.keys(this.state).map((player, i) => {
      return {
        id: i,
        name: this.state[player],
        score: 0,
        isActive: false
      }
    })

    this.props.dispatch(setPlayers(players))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className='playerForm' onSubmit={this.handleSubmit}>
        <h2>Who is playing?</h2>
        <label htmlFor="player1">Player 1: 
          <input type='text' name='player1' onChange={this.handleChange} />
        </label>
        <label htmlFor="player2">Player 2: 
          <input type='text' name='player2' onChange={this.handleChange} />
        </label>
        <label htmlFor="player3">Player 3: 
          <input type='text' name='player3' onChange={this.handleChange} />
        </label>
        <label htmlFor="player4">Player 4: 
          <input type='text' name='player4' onChange={this.handleChange} />
        </label >
        <input id='submit' type='submit' value='Play!' onSubmit={this.handleSubmit} />
      </form>
    )
  }
}

export default connect()(PlayerForm)