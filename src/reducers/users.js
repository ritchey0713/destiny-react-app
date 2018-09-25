const initialState = {
  user: {}
}

export default (state = initialState, action) => {

  switch (action.type) {
    case "GET_USER_INFO":
<<<<<<< HEAD
    debugger
    return { 
      ...state,
      users: action.user.Response[0]}
=======
      // debugger
      return {
        ...state,
        user: action.user.Response[0]
      }
>>>>>>> 94f230cfce760d1ca86bb91da9b01f9f1ac19ed4

    default:
      return state

  }
}