import API from 'goals-todos-api';

export const RECEIVE_DATA = "REVEIVE_DATA";

// action creator

function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
}

// asynchronous action creator

export function handleInitialData() {
  return (dispatch) => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(receiveData(todos, goals));
      }
    );
  };
}
