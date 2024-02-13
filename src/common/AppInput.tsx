// package import
import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, I18nManager, TextInputProps, ViewProps, StyleProp, ViewStyle } from 'react-native'


// utils import
import { moderateScale } from '../utils/ResponsiveDimentions'
import colors from '../utils/colors'
import { hp, wp } from '../utils/dimensions'
// icons import
import Text from './AppText'
import { AntDesign, FontAwesome } from './AppIcon'
import FontsSizes from '../utils/FontsSizes'

type Props = TextInputProps & ViewProps & {
    viewStyle?: StyleProp<ViewStyle>;
    errors?: string | undefined;
    touched?: boolean | undefined;
    inputError?: boolean;
    inputIconType?: string;
    inputIconName?: string;
    title: string;
    handleChange: (value: string) => any;
    handleBlur: (e: any) => any;
    dropDownInput?: boolean;
    handleClick?: (value: boolean) => void;
    hideDropDownicon?: boolean;
    inputRightIconName?: string
    inputRightIconType?: string;
    constinerStyle?: StyleProp<ViewStyle>;
    lable?: string
}
const AppInput = (props: Props) => {
    const [inputType, setInputType] = useState(props.secureTextEntry ? true : false)  /// if input is password type 

    return (

        <View style={[{ width: '100%', alignSelf: 'center', marginTop: moderateScale(0) }, props.viewStyle]}>
            {/* {props.lable && <Text style={[gStyles.title]}>{props.lable}</Text>} */}
            {props.lable && <Text style={styles.inputTitle}>{props.lable}</Text>}
            <View style={[{ marginBottom: 2, borderWidth: 1, borderColor: ((props.errors && props.touched) || props.inputError) ? 'red' : colors?.grey, borderRadius: moderateScale(4), backgroundColor: colors?.white, }, props?.constinerStyle,]}>

                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: moderateScale(3), width: '100%',
                }}>
                    {props.inputIconType &&
                        <></>
                        // <AppIcon type={props.inputIconType} name={props.inputIconName} style={{}} />
                    }
                    <TextInput
                        {...props}
                        allowFontScaling={false}
                        style={[styles.input, props.style, { width: props.secureTextEntry || props.inputRightIconType ? '83%' : '90%', }]}
                        placeholder={props.title}
                        placeholderTextColor={colors.textGray}
                        onChangeText={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.value}
                        secureTextEntry={inputType}

                    />

                    {props.dropDownInput &&
                        /// this absolute TouchableOpacity ....  if input is dropdown list to click on it to fire any callback action
                        <TouchableOpacity onPress={() => props?.handleClick && props?.handleClick(true)}
                            style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        </TouchableOpacity>
                    }
                    {props.dropDownInput && !props?.hideDropDownicon &&
                        <AntDesign name='down' style={{ fontSize: FontsSizes.font14, color: colors?.textGray }} />
                    }

                    {props.inputRightIconType &&
                        <></>
                        // <AppIcon type={props.inputRightIconType} name={props.inputRightIconName} style={{
                        //     fontSize: FontsSizes.font20,
                        // }} />
                    }


                    {props.secureTextEntry &&
                        ///  eye icon to hide or show password text ..... if input is password type
                        <TouchableOpacity onPress={() => setInputType(!inputType)}
                            style={{ width: wp(10), height: hp(6), alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome name={inputType ? 'eye-slash' : 'eye'} style={{ color: colors.textGray, fontSize: FontsSizes.font20 }} />
                        </TouchableOpacity>
                    }
                </View>
            </View >
            {
                <Text
                    style={[styles.errorMsg, { paddingHorizontal: wp(2), }]} >
                    {props.touched && props.errors}
                </Text>
            }


        </View>
    )
}

export default AppInput

const styles = StyleSheet.create({
    errorMsg: {
        color: 'red',
        fontSize: FontsSizes.font12,
        textAlign: "right"
    },
    inputCon: {

    },
    input: {
        height: hp(5.5), fontSize: FontsSizes.font14,
        flex: 1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    inputTitle: {
        color: colors?.black,
        fontSize: FontsSizes.font16
    }
    // lable: [
    //     gStyles.text_black,
    //     gStyles.pt_5,
    //     {
    //         paddingBottom: moderateScale(2),
    //         fontWeight: "500"
    //     }
    // ]
})
