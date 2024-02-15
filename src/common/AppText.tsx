import React from 'react';
import { StyleSheet, Text as MainText, I18nManager, StyleProp, TextStyle } from 'react-native';
import colors from '../utils/colors';
import { TextProps } from 'react-native';
import FontsSizes from '../utils/FontsSizes';
import { moderateScale } from '../utils/ResponsiveDimentions';

type Props = {
    bold?: boolean,
    regular?: boolean,
    white?: boolean,
    primary?: boolean,
    size?: number,
    color?: string,
    title?: boolean,
    center?: boolean,
    justify?:boolean,
    style?:StyleProp<TextStyle> | any,
    lineHeight?:number,
    isError?:boolean
}

const AppText = (props: TextProps & Props) => {
    const {lineHeight:textLineHeight, bold, regular, white, primary, style, size, color, title, center , justify,isError} = props
   
    const lineHeight = textLineHeight?  textLineHeight :     style?.fontSize ?  style?.fontSize * 1.4  : size? size*1.4 : FontsSizes?.font14 *1.4
   
    return (
        <MainText {...props}
            style={[
                { color: color ? color : "#000", fontFamily:"Cairo" , textAlign:'justify'  , },
                { textAlign: 'left' },
                bold && styles?.bold,
                regular && styles.regular,
                white && styles?.white,
                primary && styles?.primary,
                title && styles?.title,
                 center &&{ textAlign: "center" },
                !!size && { fontSize: size },
                isError&& {color:'red'},
                // justify && {textAlign:"justify"},
                style,
                {lineHeight: title ?  FontsSizes?.font23 * 1.4: lineHeight }
            ]}
        >{props?.children}</MainText>
    );
}

const styles = StyleSheet?.create({
    bold: {
        fontWeight: "bold",
    },
    regular: {
        fontWeight: "500",
    },
    white: {
        color: colors?.white
    },
    primary: {
        color: colors?.primary
    },
    title: {
        fontSize: FontsSizes?.font23,
        paddingVertical: moderateScale(3)
    }
})

export default AppText;