import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from "components/Header";
import StartGameScreen from "screens/StartGameScreen";
import GameScreen from "screens/GameScreen";
import GameOverScreen from "screens/GameOverScreen";
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {

    const [userNumber, setUserNumber] = useState<number | undefined>();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={(err)=>{console.log(err)}}/>
    }

    const configureNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(undefined);
    }

    const startGameHandler = (selectedNumber: number) => {
        setUserNumber(selectedNumber);
        setGuessRounds(0)
    }

    const gameOverHandler = (numberOfRounds: number) => {
        setGuessRounds(numberOfRounds)
    }

    let content = <StartGameScreen onStartGame={startGameHandler}/>

    if (userNumber && guessRounds === 0) {
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    } else if (guessRounds> 0) {
        content = <GameOverScreen numberOfRoundsToWin={guessRounds} userNumber={userNumber!} onStartGamePressed={configureNewGameHandler}/>
    }

    return (
        <View style={styles.screen}>
            <Header title="Guess a number"/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%'
    }
});
