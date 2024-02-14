import React, { createRef, useState } from 'react'
import { FlatList } from 'react-native'
import ToDoListItem from './components/ToDoListItem'
import { updateTaskStatus } from '../../../redux/features/tasks/tasksSlice'
import { useDispatch, useSelector } from 'react-redux'
import AppView from '../../../common/AppView'
import UpdateTaskStatusModal from './components/UpdateTaskStatusModal'

const ToDoList = () => {
  const firstInputRef = createRef()
  const todoList = useSelector((state: any) => state.tasks.data)
  const dispatch = useDispatch()
  const [currentTaskSelected, setCurrentTaskSelected] = useState({})
  const [showUpdateModal, setShowUpdateModal] = useState(false)


  const updateTaskStatusVoid = () => {
    dispatch(updateTaskStatus({ task: { id: 1 }, newStatus: 'com' }))
  }

  const showUpdateModalVoid = (value: object) => {
    setShowUpdateModal(true)
    setCurrentTaskSelected(value)
  }

  return (
    <AppView >
      <FlatList
        data={todoList}
        renderItem={({ item, index }) =>
          <ToDoListItem item={item} openUpdateModal={showUpdateModalVoid}
          />
        }
      />


      <UpdateTaskStatusModal open={showUpdateModal} closeModal={() => setShowUpdateModal(false)} callback={updateTaskStatusVoid}
      data={currentTaskSelected} />
    </AppView>
  )
}

export default ToDoList