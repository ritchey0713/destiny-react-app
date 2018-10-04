const initialState = {
  username: '',
  characters: []
}

export default (state = [], action) => {

  switch (action.type) {
    case "GET_USER_INFO":
      debugger
      return {
        ...state,
        characters: action.user
      }
    case "SET_USERNAME":
      return {
        ...state,
        username: action.username
      }
    default:
      return state

  }
}