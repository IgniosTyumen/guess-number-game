import React, {PropsWithChildren} from "react";

import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"
import Colors from "constants/Colors";

interface PrimaryButtonProps extends PropsWithChildren<any>{
    onPress:  (event: GestureResponderEvent) => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {

    const {children,onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <View style={styles.primaryButtonContainer}>
                <Text style={styles.primaryButtonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryButtonContainer: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    primaryButtonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
})

export default PrimaryButton
