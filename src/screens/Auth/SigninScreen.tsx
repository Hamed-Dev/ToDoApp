import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppView from '../../common/AppView'
import AppInput from '../../common/AppInput'
import AppButton from '../../common/AppButton'
import AppText from '../../common/AppText'
import FontsSizes from '../../utils/FontsSizes'
import { moderateScale } from '../../utils/ResponsiveDimentions'

const SigninScreen = () => {
    return (
        <AppView flex={1}  >
            <AppText title bold center style={{ marginTop: moderateScale(40) }}>Welcome!</AppText>
            <AppView style={styles.componentCon}>
                <AppInput
                    title={'Email'} />

                <AppInput
                    title={'password'} />

                <AppButton primary title={'Login'} />
            </AppView>
        </AppView>
    )
}

const styles = StyleSheet.create({
    componentCon: { width: '90%', marginTop: moderateScale(50), alignSelf: 'center' }
})

export default SigninScreen 