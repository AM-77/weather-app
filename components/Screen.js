import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { colors } from '../utils/colors'
import { fetchCity, fetchWeather } from '../utils/APIsConsumer'
import Search from './Search'
import HeadInfos from './HeadInfos'
import MainInfos from './MainInfos'

export default class Screen extends Component {

    constructor(props){
        super(props)
        this.state = {
            isSearching: false,
            weather: { 
                lon: "0.0",
                lat: "0.0",
                country: "Country",
                sunrise: "sunrise",
                sunset: "sunset",
                wind_spd: "0",
                temp: "0",
                rh: "0",
                clouds: "0", 
            }
        }
    }

    onSubmitEditing = async ({nativeEvent}) => {
        const cityName = nativeEvent.text
        this.setState({ isSearching: true })
        const city = await fetchCity(cityName)

        if(city.type !== "error"){
            this.setState((state)=>({
                weather : {
                    ...state.weather,
                    country: city.country,
                    lon: city.coordinates[0].toFixed(2),
                    lat: city.coordinates[1].toFixed(2)
                }
            }))
            const weather = await fetchWeather(city.coordinates)


            this.setState((state)=>({
                weather: {
                    ...state.weather,
                    ...weather
                },
                isSearching: false
            }))
        }else{
            this.setState((state)=>({
                weather : {
                    ...state.weather,
                    country: "No Results",
                    lon: "0.0",
                    lat: "0.0"
                },
                isSearching: false
            }))
        }
    }

    render() {
        const { isSearching } = this.state
        const { lon, lat, country, sunrise, sunset, wind_spd, temp, rh, clouds } = this.state.weather
        return (
            <View style={styles.container}>
                <Search onSubmitEditing={this.onSubmitEditing} />
                <View style={styles.infosContainer}>
                    {
                        isSearching 
                            ? 
                            <View style={styles.searching}>
                                <ActivityIndicator size="large" color={colors.light} />
                            </View>
                            : 
                            <View style={styles.innerInfosContainer}>
                                <HeadInfos country={country} lat={lat} lon={lon} />
                                <MainInfos weather={{sunrise, sunset, wind_spd, temp, rh, clouds}} />
                            </View>   
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    infosContainer:{
        flex: 1,
    },
    searching: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    innerInfosContainer:{
        flex: 1,
        marginTop: 25
    },
})
