import React, {PropsWithChildren} from "react";

import {View, Text, StyleSheet} from "react-native"
import Colors from "constants/Colors";

interface NumberContainerProps extends PropsWithChildren<any>{

}

const NumberContainer = (props: NumberContainerProps) => {

    const {children} = props;

    return (
        <View style={styles.numberContainer}>
           <Text style={styles.number}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        color: Colors.primary,
        fontSize: 22
    }
})

export default NumberContainer
