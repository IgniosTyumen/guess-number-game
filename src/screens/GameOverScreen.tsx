import React from "react";

import {Image, StyleSheet, Text, View} from "react-native"
import BodyText from "components/BodyText";
import DefaultStyles from "constants/default-styles"
import Colors from "constants/Colors";
import PrimaryButton from "components/PrimaryButton";

interface GameOverScreenProps {
    numberOfRoundsToWin: number;
    userNumber: number;
    onStartGamePressed: () => void;
}

const GameOverScreen = (props: GameOverScreenProps) => {

    const {numberOfRoundsToWin, userNumber, onStartGamePressed} = props;
    return (
        <View style={styles.gameOverScreen}>
            <BodyText style={DefaultStyles.bodyText}> The game is over!</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    // source={require('../../assets/success.png')}
                    source={{
                        uri: 'https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_screaming.jpg/300px-Crying_Cat_screaming.jpg'
                    }}
                    resizeMode="cover"
                    fadeDuration={1000}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{numberOfRoundsToWin}</Text> round to guess the
                    number <Text style={styles.highlight}>{userNumber}</Text>
                </BodyText>
            </View>
            <PrimaryButton onPress={onStartGamePressed}>Start a new game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    gameOverScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: '80%',
        height: 300,
        overflow: "hidden",
        marginVertical: 30,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        width: '80%',
        marginVertical: 10,
    },
    resultText: {
        textAlign: "center",
        fontSize: 20
    }
})

export default GameOverScreen
