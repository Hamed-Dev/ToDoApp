import { combineReducers, configureStore } from '@reduxjs/toolkit'
import requestsSlice from './features/requests/requestsSlice'

const reuducer = combineReducers({
  requests: requestsSlice,
})

export const store = configureStore({
  reducer: reuducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch