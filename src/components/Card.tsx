import React, {PropsWithChildren} from "react";

import {View, StyleSheet, StyleProp} from "react-native"

interface CardProps extends PropsWithChildren<any>{
    style?: StyleProp<any>
}

const Card = (props: CardProps) => {

    const {children, style} = props;

    return (
        <View style={{...styles.cardContainer, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius:6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10
    }
})

export default Card
