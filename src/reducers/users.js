
export default (state = [], action) => {

  switch (action.type) {
    case "GET_USER_INFO":
      debugger
      return state = {
        user: action.user.Response.characters.data
      }
    default:
      return state

  }
}