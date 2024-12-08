import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthTokenState {
  value: string
}
const initialState: AuthTokenState = {
  value: '',
}
const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    deleteAuthToken: (state) => {
      state.value = ''
    },
  },
})
export const { setAuthToken, deleteAuthToken } = authTokenSlice.actions
export default authTokenSlice.reducer
