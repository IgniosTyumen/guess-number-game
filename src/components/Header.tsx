import React from "react";

import {StyleSheet, View, Text} from "react-native"

import Colors from "constants/Colors";

interface HeaderProps {
    title: string
}

const Header = (props: HeaderProps) => {
    const {title} = props;

    return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black",
        fontSize: 18,
        fontFamily: 'open-sans-bold'

    }
})

export default Header;
