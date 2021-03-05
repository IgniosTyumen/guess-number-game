import React, {PropsWithChildren} from "react";

import { Text, StyleSheet, TextProps, StyleProp} from "react-native"

interface BodyTextProps extends PropsWithChildren<TextProps>{
    style?: StyleProp<any>
}

const BodyText = ({children, style, ...other}: BodyTextProps) => {

    return (
        <Text style={{...styles.bodyText, ...style}} {...other}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'open-sans'
    }
})

export default BodyText
