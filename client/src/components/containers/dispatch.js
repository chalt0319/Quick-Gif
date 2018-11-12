
export function dispatchFunction(word) {
  return function (dispatch) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        dispatch({type: 'ADD_POST', posts: data['data']})})
        .catch(error => console.log(error))
  }
}

export function dispatchFunctionUser(object, updateUsers) {
  return function (dispatch) {
    return fetch('api/users', {
        method: "POST",
        body: JSON.stringify(object),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => updateUsers())
    .catch(error => console.log(error))
  }
}
