import { RootState } from '@/lib/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the TS type for the counter slice's state
export interface UserState {
  isLoggedIn: boolean
}

// Define the initial value for the slice state
const initialState: UserState = {
   isLoggedIn: false
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLoggedIn: (state: UserState, action) => {
        state.isLoggedIn = action.payload;
    }
  }
})

// Export the generated action creators for use in components
export const { setLoggedIn } = userSlice.actions

export const getUserState = (state:RootState) => state.user;

// Export the slice reducer for use in the store configuration
export default userSlice.reducer