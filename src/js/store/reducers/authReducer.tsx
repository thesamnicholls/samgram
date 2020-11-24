const initialState = {
  authError: null,
}

const authReducer = (
  state = initialState,
  action: { type: string; error: { message: string } },
) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: 'Login failed' }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_SUCCESS':
      return state
    default:
      return state
  }
}

export default authReducer
