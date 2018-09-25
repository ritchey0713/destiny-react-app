const initialState = {
  user: {}
}

export default (state = initialState, action) => {

  switch (action.type) {
    case "GET_USER_INFO":
      // debugger
      return {
        ...state,
        user: action.user.Response[0]
      }

    default:
      return state

  }
}