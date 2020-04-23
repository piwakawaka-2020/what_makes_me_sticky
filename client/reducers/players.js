const players = (state = [], action) => {
  switch(action.type) {
    case 'SET_ACTIVE_USERS' :
      return action.players
    
    default: 
      return state
    }
}

export default players