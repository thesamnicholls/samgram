export const signIn = (credentials: { email: any; password: any }) => {
  return (
    dispatch: (arg0: { type: string; error?: any }) => void,
    getState: any,
    { getFirebase }: any,
  ) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' })
      })
      .catch((error: any) => {
        dispatch({ type: 'LOGIN_ERROR', error })
      })
  }
}

export const signOut = () => {
  return (dispatch: (arg0: { type: string }) => void, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      })
  }
}
