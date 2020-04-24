const score = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SCORE' :
      return action.toggle

    default: 
      return state
  }
}

export default score