import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import { colors } from './utils/colors'
import InternetIndecator from './components/InternetIndecator'
import Screen from './components/Screen'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

let customFonts = { 'Gotu-Regular': require('./assets/fonts/Gotu-Regular.ttf') }

export default class App extends Component {

    state = { fontsLoaded: false, }
    
    async loadFontsAsync() {
        await Font.loadAsync(customFonts)
        this.setState({ fontsLoaded: true })
    }
    
    componentDidMount() {
        this.loadFontsAsync()
    }

    render() {
        if(this.state.fontsLoaded){
            return (    
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <InternetIndecator />
                        <Screen />
                    </View>
                </View>
            )
        }else{
            return <AppLoading />;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    innerContainer:{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    }
})
