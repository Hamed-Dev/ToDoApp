import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasksSlice'

const reuducer = combineReducers({
  tasks: tasksReducer,
})

export const store = configureStore({
  reducer: reuducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch