export const setPlayers = players => {
  return {
    type: 'SET_PLAYERS',
    players
  }
}

export const setActivePlayer = (players,  id) => {
  console.log('yes')
  return  {
    type:  'SET_ACTIVE_PLAYER',
    players,
    id
  }
}

export const updateScore = id => {
  return {
    type: 'UPDATE_SCORE',
    id
  }
}