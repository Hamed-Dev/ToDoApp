import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyle from '../theme/globalStyle'
import AppText from '../../common/AppText'
import FontsSizes from '../../utils/FontsSizes'
import { useNavigation } from '@react-navigation/native'
import AppView from '../../common/AppView'

const SplashScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {

    let startingTime = setTimeout(() => {
      navigation.replace("Signin")
    }, 2000);

    return () => {
      clearTimeout(startingTime)
    }
  }, [])
  return (
    <AppView flex={1} center >
      <AppText bold size={FontsSizes.font22 + 10}>To Do APP</AppText>
    </AppView>
  )
}

const style = StyleSheet.create({

})

export default SplashScreen