import React, { createRef, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ToDoListItem from './components/ToDoListItem'
import { addNewTask, updateTaskStatus } from '../../../redux/features/tasks/tasksSlice'
import { useDispatch, useSelector } from 'react-redux'
import AppView from '../../../common/AppView'
import UpdateTaskStatusModal from './components/AddNewTaskModal'
import AddNewTaskModal from './components/AddNewTaskModal'
import AppButton from '../../../common/AppButton'
import { wp } from '../../../utils/dimensions'
import { moderateScale } from '../../../utils/ResponsiveDimentions'

const ToDoList = () => {
  const firstInputRef = createRef()
  const todoList = useSelector((state: any) => state.tasks.data)
  const dispatch = useDispatch()
  const [currentTaskSelected, setCurrentTaskSelected] = useState({})
  const [showUpdateModal, setShowUpdateModal] = useState(false)





  //////===== Add New Task
  const addNewTaskVoid = (values: any) => {
    dispatch(addNewTask({ task: { title: values?.title, description: values?.description, status: 'incomplete' } }))
    setShowUpdateModal(false)
  }


  const showUpdateModalVoid = (value: object) => {
    setShowUpdateModal(true)
    setCurrentTaskSelected(value)
  }

  return (
    <AppView style={{ flex: 1 }}>
      <FlatList
        data={todoList}
        renderItem={({ item, index }) =>
          <ToDoListItem item={item} openUpdateModal={showUpdateModalVoid}
          />
        }
      />

      <AppButton title='New' primary style={styles.addNewBtn} containerStyle={styles.addNewCon} onPress={() => setShowUpdateModal(true)} />
      <AddNewTaskModal open={showUpdateModal} closeModal={() => setShowUpdateModal(false)} callback={addNewTaskVoid} />
    </AppView>
  )
}

const styles = StyleSheet.create({
  addNewBtn: {
    width: wp(20), height: wp(20), borderRadius: wp(20) / 2,
  },
  addNewCon: {
    width: wp(20), height: wp(20), borderRadius: wp(20) / 2, position: 'absolute', bottom: moderateScale(20), right: moderateScale(20), alignSelf: 'flex-end'
  }
})
export default ToDoList