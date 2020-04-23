import React from 'react'
import { connect } from 'react-redux'
import { setPlayers } from '../actions/players'

class PlayerForm extends React.Component {

  state = {

  }

  handleSubmit = e => {
    e.preventDefault()

    const players = Object.keys(this.state).map((player, i) => {
      console.log(player)
      return {
        id: i,
        name: this.state[player],
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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="player1">Player One: </label>
        <input type='text' name='player1' onChange={this.handleChange} />

        <label htmlFor="player2">Player Two: </label>
        <input type='text' name='player2' onChange={this.handleChange} />

        <label htmlFor="player3">Player Three: </label>
        <input type='text' name='player3' onChange={this.handleChange} />

        <label htmlFor="player4">Player Four: </label>
        <input type='text' name='player4' onChange={this.handleChange} />

        <input type='submit' value='Play!' onSubmit={this.handleSubmit} />
      </form>
    )
  }
}

export default connect()(PlayerForm)