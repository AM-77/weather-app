import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../utils/colors'
import Sunny from './svg/Sunny'
import Wind from './svg/Wind'
import Humidity from './svg/Humidity'
import TitledText from './TitledText'
import Rainy from "./svg/Rainy"
import RainyWind from "./svg/RainyWind"
import Windy from "./svg/Windy"
import Fog from "./svg/Fog"
import Cloudy from "./svg/Cloudy"
import CloudySun from "./svg/CloudySun"
import Stormy from "./svg/Stormy"
import Snowy from "./svg/Snowy"



export default class MainInfos extends Component {

    weatherIcon = () => {
        const { wind_spd, temp, rh, clouds } = this.props.weather
    
        if(temp < 5){
            return <Snowy width={150} height={150} fill={colors.light}/>
        }else{
            if(wind_spd > 7){
                if(clouds > 50){
                    if(rh > 60){
                        if(temp > 18){
                            return <Cloudy width={150} height={150} fill={colors.light}/>
                        }else{
                            return <RainyWind width={150} height={150} fill={colors.light}/>
                        }
                    }else{
                        if(temp > 18){
                            return <Sunny width={150} height={150} fill={colors.light}/>
                        }else{
                            return <Stormy width={150} height={150} fill={colors.light}/>
                        }
                    }
                }else{
                    if(rh > 60){
                        if(temp > 18){
                            return <CloudySun width={150} height={150} fill={colors.light}/>
                        }else{
                            return <Fog width={150} height={150} fill={colors.light}/>
                        }
                    }else{
                        if(temp > 18){
                            return <Sunny width={150} height={150} fill={colors.light}/>
                        }else{
                            return <Windy width={150} height={150} fill={colors.light}/>
                        }
                    }
                }
            }else{
                if(clouds > 50){
                    if(rh > 60){
                        if(temp > 18){
                            return <Cloudy width={150} height={150} fill={colors.light}/>
                        }else{
                            return <Rainy width={150} height={150} fill={colors.light}/>
                        }
                    }else{
                        return <Sunny width={150} height={150} fill={colors.light}/>
                    }
                }else{
                    if(rh > 60){
                        if(temp > 18){
                            return <CloudySun width={150} height={150} fill={colors.light}/>
                        }else{
                            return <Fog width={150} height={150} fill={colors.light}/>
                        }
                    }else{
                        return <Sunny width={150} height={150} fill={colors.light}/>
                    }
                }
            }
        }
        
        
       
    }
    
    render() {
        const { sunrise, sunset, wind_spd, rh, temp } = this.props.weather
        return (
            <View style={styles.container}>
                <View style={styles.temp} >
                    {this.weatherIcon()}
                    <Text style={styles.tempText}>{temp}°</Text>
                </View>
                <View style={styles.humWin}>
                    <View style={styles.humidity} >
                        <Text style={styles.humidityText}>{rh}</Text>
                        <Humidity style={styles.humidityIcon} width={35} height={35} fill={colors.light} />
                    </View>
                    <View style={styles.bar}/>
                    <View style={styles.wind} >
                        <Text style={styles.windText}>{wind_spd}</Text>
                        <Wind style={styles.windIcon} width={35} height={35} fill={colors.light} />
                        <Text style={styles.ms}>m/s</Text>
                    </View>                    
                </View>

                <View style={styles.sunTimeContainer}>
                    <View style={styles.suntime}>
                        <TitledText title="Sun Rise: " text={sunrise} size={15} />   
                    </View>
                    <View style={styles.suntime}>
                        <TitledText title="Sun Set: " text={sunset} size={15} />            
                    </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 25,
        paddingTop: 25,
    },
    temp:{
        flexDirection: "row",
        alignItems: "center",
    },  
    tempText:{
        fontFamily: "Gotu-Regular",
        color: colors.light,
        fontSize: 60,
        marginTop: 80,
        marginLeft: 10
    },
    humWin:{
        flexDirection: "row",
        marginTop: 40
    },
    humidity:{
        flexDirection: "row",
        alignItems: "center",
    },
    humidityText: {
        color: colors.light,
        fontSize: 21,
        marginRight: 5
    },
    wind:{
        flexDirection: "row",
        alignItems: "center",
    },
    windText: {
        color: colors.light,
        fontSize: 21,
        marginRight: 5
    },
    ms:{
        fontSize: 10,
        color: colors.light,
        position: "absolute",
        right: 17,
        bottom: 0
    },  
    bar: {
        marginHorizontal: 10,
        width: 3,
        backgroundColor: colors.dark,
        borderRadius: 3
    },
    sunTimeContainer:{
        flexDirection: "row",
        marginTop: "auto",
        marginBottom: 35,
        justifyContent: "center"
    }

})
