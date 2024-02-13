import React from 'react';
import { PressableProps, StyleSheet, ViewProps, ViewStyle, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../utils/colors';
import { moderateScale } from '../utils/ResponsiveDimentions';
import View from './AppView';
import Text from './AppText';
import FontsSizes from '../utils/FontsSizes';
import { hp } from '../utils/dimensions';




const AppButton = (
    props: TouchableOpacityProps &
        ViewProps & { cancle?: boolean; bg_color?: string; title?: string; primary?: boolean | undefined; containerStyle?: ViewStyle, icon?: string, txtStyle?: object, fontSize?: number | undefined, disabled?: boolean, loading?: boolean },
) => {
    const { bg_color, cancle, title, primary, style, containerStyle, icon, txtStyle, fontSize, loading } = props;

    return (
        <View
            style={[
                {
                    padding: moderateScale(4),
                    width: '100%',
                    alignItems: 'center',
                    height:hp(9)
                },
                containerStyle]}>
            <TouchableOpacity
                disabled={props?.disabled}
                {...props}
                onPress={props?.onPress}

                style={
                    [
                        styles?.button, primary && { backgroundColor: colors?.primary },
                        {
                            borderWidth: 1,
                            borderColor: colors?.primary,
                            opacity: props?.disabled ? 0.6 : 1
                        },
                        !!bg_color && { backgroundColor: bg_color, borderColor: bg_color },
                        cancle && { backgroundColor: colors?.cancelled, borderColor: colors?.cancelled, },

                        style
                    ]
                }>

                {!loading ?
                    <>
                        {icon && icon}
                        <Text size={fontSize ? fontSize : FontsSizes?.font18} bold primary={!primary && !cancle} white={primary || cancle} style={[{ fontSize: FontsSizes?.font16, }, txtStyle]} >
                            {title}
                        </Text>
                    </>
                    :
                    <ActivityIndicator color={colors.white} size='small' />
                }

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {},
    button: {
        backgroundColor: colors?.white,
        height: hp(6),
        width: '100%',
        borderRadius: moderateScale(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default AppButton;
