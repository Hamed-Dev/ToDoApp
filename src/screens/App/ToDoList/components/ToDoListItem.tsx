import React from 'react'
import { View } from 'react-native'
import AppView from '../../../../common/AppView'
import AppText from '../../../../common/AppText'
import AppButton from '../../../../common/AppButton'

type Props = {
  item?: any,
  openUpdateModal: any
}
const ToDoListItem = ({ item, openUpdateModal }: Props) => {
  return (
    <AppView>

      <AppText>{item?.title}</AppText>
      <AppText>{item?.description}</AppText>
      <AppText>{item?.status}</AppText>
      <AppButton primary title='Update' onPress={() => openUpdateModal({
        id: item?.item, title: item?.title, description: item?.description, status: item?.status
      })} />
    </AppView>
  )
}

export default ToDoListItem