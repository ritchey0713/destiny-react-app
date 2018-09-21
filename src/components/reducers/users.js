export default (state= [], action) => {
  switch(action.type){
    case "GET_USER_INFO":
      return action.user

    default:
      return state

  }
}