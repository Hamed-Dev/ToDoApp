import React, { createRef, useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AppView from '../../common/AppView'
import AppInput from '../../common/AppInput'
import AppButton from '../../common/AppButton'
import AppText from '../../common/AppText'
import FontsSizes from '../../utils/FontsSizes'
import { moderateScale } from '../../utils/ResponsiveDimentions'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { signinValidation } from '../../inpuValidation/AuthValidation'

const SigninScreen = () => {
    const firstInputRef = createRef()
    const formikRef = useRef(null)
    const navigation = useNavigation()
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        firstInputRef.current?.focus()  //// to set first input focused by default
    }, [])



    return (
        <AppView   >
            <AppText title bold center style={{ marginTop: moderateScale(40) }}>Welcome!</AppText>

            <Formik
                innerRef={formikRef}
                initialValues={{ userName: '', password: '' }}
                validateOnMount={true}
                onSubmit={values => {
                    (values.userName == 'admin' && values.password == 'admin') ? navigation.navigate('AppStack')
                        :
                        setErrorMsg('Invalid username or password')
                }}
                validationSchema={signinValidation}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                    <AppView style={styles.componentCon}>

                        <AppText isError style={{ marginBottom: moderateScale(5) }}>{errorMsg}</AppText>
                        <AppInput
                            ref={firstInputRef}
                            title={'Email'}
                            handleChange={handleChange('userName')}
                            handleBlur={handleBlur('userName')}
                            errors={errors.userName}
                            touched={touched.userName}
                            value={values.userName} />

                        <AppInput
                            title={'Password'}
                            handleChange={handleChange('password')}
                            handleBlur={handleBlur('password')}
                            errors={errors.password}
                            touched={touched.password}
                            value={values.password} />

                        <AppButton primary title={'Login'} onPress={handleSubmit} />
                    </AppView>
                )}
            </Formik>
        </AppView>
    )
}

const styles = StyleSheet.create({
    componentCon: { width: '90%', marginTop: moderateScale(50), alignSelf: 'center' }
})

export default SigninScreen 