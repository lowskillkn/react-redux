const defaultState = {
  users: [],
}

const SET_USERS = 'SET_USERS'
const DELETE_USER = 'DELETE_USER'

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      }
    default:
      return state
  }
}

export const setUsers = (payload) => {
  return {
    type: SET_USERS,
    payload,
  }
}

export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  }
}
