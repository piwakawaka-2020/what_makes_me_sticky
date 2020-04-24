const players = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return action.players

    case 'SET_ACTIVE_PLAYER':
      return action.players.map(player => {
        if (player.id === action.id) {
          player.isActive = true
        } else {
          player.isActive = false
        }

        return player
      })

    case 'UPDATE_SCORE':
      return state.map(player => {
        if (player.id == action.id) {
          player.score += 1
        }
        console.log(player)
        return player
      })

    default:
      return state
  }
}

export default players