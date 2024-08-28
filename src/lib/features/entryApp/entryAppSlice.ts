import { RootState } from '@/lib/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the TS type for the counter slice's state
export interface EntryAppState {
  navbarItems: string[]
}

// Define the initial value for the slice state
const initialState: EntryAppState = {
    navbarItems: ['Navbar']
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const entryAppSlice = createSlice({
  name: 'entryApp',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    doNothing: state => {}
  }
})

// Export the generated action creators for use in components
export const { doNothing } = entryAppSlice.actions

export const getNavbarState = (state:RootState) => state.entryApp.navbarItems;

// Export the slice reducer for use in the store configuration
export default entryAppSlice.reducer