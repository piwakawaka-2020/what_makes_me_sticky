export const setPlayers = players => {
  return {
    type: 'SET_PLAYERS',
    players
  }
}

export const setActivePlayer = (players,  id) => {
  return  {
    type:  'SET_ACTIVE_PLAYER',
    players,
    id
  }
}