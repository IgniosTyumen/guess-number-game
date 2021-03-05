import React, {useState} from "react";

import {Button, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard, Alert} from "react-native"
import Card from "components/Card";
import Colors from "constants/Colors";
import Input from "components/Input";
import NumberContainer from "components/NumberContainer";
import BodyText from "components/BodyText";

import DefaultStyles from "constants/default-styles"
import PrimaryButton from "components/PrimaryButton";

interface StartGameScreenProps {
    onStartGame: (userNumber: number) => void;
}

const StartGameScreen = (props: StartGameScreenProps) => {

    const {onStartGame} = props;

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState<number | undefined >()

    const numberInputHandler = (value: string) => {
        setEnteredValue(value.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber >=99) {
            Alert.alert('Invalid number', 'Number must be between 1 and 99',[{
                text: 'Okay',
                style:"destructive",
                onPress: resetInputHandler
            }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
        <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <PrimaryButton onPress={()=>onStartGame(selectedNumber!)}>START GAME</PrimaryButton>
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a number</BodyText>
                    <Input
                        style={styles.input}
                        autoCapitalize="none"
                        blurOnSubmit
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={Colors.secondary}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm"
                                    onPress={confirmInputHandler}
                                    color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    title: {
        marginVertical: 10,
        ...DefaultStyles.bodyText
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: "center",
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: "center"
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: "center"
    }
})

export default StartGameScreen
