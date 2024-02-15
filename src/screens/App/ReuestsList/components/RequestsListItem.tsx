import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AppView from '../../../../common/AppView'
import AppText from '../../../../common/AppText'
import AppButton from '../../../../common/AppButton'
import { useDispatch } from 'react-redux'
import { removeRequest, updateRequestStatus } from '../../../../redux/features/requests/requestsSlice'
import colors from '../../../../utils/colors'
import { hp, wp } from '../../../../utils/dimensions'
import { moderateScale } from '../../../../utils/ResponsiveDimentions'
import FontsSizes from '../../../../utils/FontsSizes'
import statusColors from '../../../../utils/statusColors'
import {MaterialCommunityIcons } from '../../../../common/AppIcon'

type Props = {
  item?: any,
  openUpdateModal: any
}
const RequestsListItem = ({ item }: Props) => {
  const dispatch = useDispatch()


  const deleteTaskVoid = () => {
    dispatch(removeRequest({ request: item }))
  }


  ////////======= Set to complete
  const updateTaskVoid = () => {
    dispatch(updateRequestStatus({ request: item }))
  }

  return (
    <AppView row spaceBetween style={styles.container}>

      <AppView>
        <AppText bold size={FontsSizes.font16}>{item?.title}</AppText>
        <AppText regular>{item?.description}</AppText>
        <AppText bold>Status: <AppText regular color={statusColors[item?.status]}>{item?.status}</AppText></AppText>
      </AppView>

      <AppView spaceBetween style={{alignItems:'flex-end'}} >
        <TouchableOpacity onPress={() => deleteTaskVoid()}>
          <MaterialCommunityIcons name='delete-empty-outline' size={FontsSizes.font22} />
        </TouchableOpacity>

        {item?.status == 'incomplete' && <AppButton style={styles.completeBtn} txtStyle={styles.buttonTxtStyle} title='Complete' onPress={() => updateTaskVoid()} />}
      </AppView>


    </AppView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp(94), alignSelf: 'center', alignItems: 'flex-start', backgroundColor: 'white',
    padding: hp(2), marginTop: moderateScale(3), elevation: 6, shadowOffset: { height: 0, width: 2 }, shadowOpacity: 0.7, shadowColor: colors.grey,
  },
  completeBtn: {
    // height: hp(3), 
    paddingHorizontal: 5
  },
  buttonTxtStyle: {
    fontSize: FontsSizes.font12,
  }
})
export default RequestsListItem