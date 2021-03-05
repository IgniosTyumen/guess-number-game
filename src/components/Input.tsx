import React from "react";

import {TextInput, StyleSheet, StyleProp, TextInputProps} from "react-native"

interface InputProps extends TextInputProps{
    style?: StyleProp<any>
}

const Input = (props: InputProps) => {
    const {style, ...other} = props;
    return (
        <TextInput style={{...styles.inputContainer, ...style}} {...other}>

        </TextInput>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        height:30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical:10,
    }
})

export default Input;
