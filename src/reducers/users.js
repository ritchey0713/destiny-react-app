export default (state = [], action) => {
  switch (action.type) {
    case "GET_USER_INFO":
<<<<<<< HEAD
    debugger;
=======
      debugger;
>>>>>>> 34bb91bca5b9cda3576bb0a65e626b6c62d3a34f
      return action.user

    default:
      return state

  }
}