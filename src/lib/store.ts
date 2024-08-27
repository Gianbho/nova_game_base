import { configureStore } from '@reduxjs/toolkit'
import entryAppSlice from './features/entryApp/entryAppSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        entryApp: entryAppSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']