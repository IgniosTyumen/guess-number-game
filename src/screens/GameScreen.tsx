import React, {useEffect, useRef, useState} from "react";

import {Alert, ScrollView, StyleSheet, Text, View} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import NumberContainer from "components/NumberContainer";
import Card from "components/Card";
import PrimaryButton from "components/PrimaryButton";
import BodyText from "components/BodyText";

interface GameScreenProps {
    userChoice: number;
    onGameOver: (numberOfGuess: number) => void;
}

type Direction = 'lower' | 'grater'

function generateRandomBetween(min: number, max: number, userChoice: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === userChoice) {
        return generateRandomBetween(min, max, userChoice);
    } else {
        return rndNum;
    }
}

const renderListItem = (value: number, numberOfRound: number) => (
    <View key={value} style={styles.listItem}>
        <BodyText>#{numberOfRound} : </BodyText>
        <BodyText>{value}</BodyText>
    </View>)

const GameScreen = (props: GameScreenProps) => {
    const {userChoice, onGameOver} = props;
    const initialGuess = generateRandomBetween(1, 100, userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [passedGuesses, setPassedGuesses] = useState<number[]>([initialGuess])
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(passedGuesses.length)
        }
    }, [onGameOver, currentGuess, userChoice])

    const nextGuestHandler = (direction: Direction) => {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'grater' && currentGuess > userChoice)
        ) {
            Alert.alert('Cheater!', 'wrong', [
                {
                    text: 'Sorry',
                    style: "cancel"
                }
            ])
            return;
        }
        if (direction === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPassedGuesses(prev => [nextNumber, ...prev])
    }

    return (
        <View style={styles.gameScreenContainer}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <PrimaryButton onPress={() => nextGuestHandler('lower')}>
                    <Ionicons name="md-remove" size={24} color="white"/>
                </PrimaryButton>
                <PrimaryButton onPress={() => nextGuestHandler('grater')}>
                    <Ionicons name="md-add" size={24} color="white"/>
                </PrimaryButton>
            </Card>
            <View style={styles.listContainer}>
            <ScrollView contentContainerStyle={styles.list}>
                {passedGuesses.map((guess, index) => renderListItem(guess, passedGuesses.length - index))}
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gameScreenContainer: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-around",
        width: '60%'
    },
    list: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    listContainer: {
        width: '80%',
        flex: 1
    }
})

export default GameScreen
