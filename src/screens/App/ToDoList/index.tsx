import React from 'react'
import { FlatList } from 'react-native'
import ToDoListItem from './components/ToDoListItem'
import { useSelector } from 'react-redux'

const ToDoList = () => {
  const reduxState = useSelector((state: any) => state.tasks.data)
  return (
    <FlatList
      data={[1,2,3,4]}
      renderItem={({ item, index }) =>
        <ToDoListItem />
      }
    />
  )
}

export default ToDoList