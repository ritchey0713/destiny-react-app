export default (state = [], action) => {

  switch (action.type) {
    case "GET_USER_INFO":
    debugger
    return action.user.Response[0]

    default:
      return state

  }
}