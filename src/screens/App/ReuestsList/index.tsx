import React, { createRef, useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { addNewRequest } from '../../../redux/features/requests/requestsSlice'
import { useDispatch, useSelector } from 'react-redux'
import AppView from '../../../common/AppView'
import AddNewTaskModal from './components/AddNewTaskModal'
import AppButton from '../../../common/AppButton'
import { wp } from '../../../utils/dimensions'
import { moderateScale } from '../../../utils/ResponsiveDimentions'
import { getOneTimeLocation, requestLocationPermission } from '../../../controller/LocationService'
import RequestsListItem from './components/RequestsListItem'

const ReuestsList = () => {
  const firstInputRef = createRef()
  const reuestsList = useSelector((state: any) => state.requests.data)
  const dispatch = useDispatch()
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');


  useEffect(() => {
    requestLocation()

  }, [])


  //////=======  Request location permission
  const requestLocation = async () => {
    await requestLocationPermission()
      .then((loc: any) => {
        console.log('permissin Accessed', loc)
        getLocation()
      }).catch((err: any) => {
        console.log('permissin Denied')
      })
  }


  //////=======  Request location if Permission Accessed
  const getLocation = async () => {
    await getOneTimeLocation().then((position: any) => {
      console.log(position)
      //Setting Longitude state
      setCurrentLongitude(JSON.stringify(position.coords.longitude));
      //Setting Longitude state
      setCurrentLatitude( JSON.stringify(position.coords.latitude));
    }).catch((err: any) => {
      console.log('error', err)
    })
  }


  //////===== Add New Request
  const addNewTaskVoid = (values: any) => {
    dispatch(addNewRequest({ request: { title: values?.title, description: values?.description, status: 'incomplete', longitude: currentLongitude, latitude: currentLatitude } }))
    setShowUpdateModal(false)
  }


  const showUpdateModalVoid = (value: object) => {
    setShowUpdateModal(true)
  }

  return (
    <AppView style={{ flex: 1 }}>
      <FlatList
        data={reuestsList}
        renderItem={({ item, index }) =>
          <RequestsListItem item={item} openUpdateModal={showUpdateModalVoid}
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
export default ReuestsList