import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Cloudy from './svg/Cloudy'
import CloudySun from './svg/CloudySun'
import Fog from './svg/Fog'
import Lightning from './svg/Lightning'
import LightningSun from './svg/LightningSun'
import Rainy from './svg/Rainy'
import RainyWind from './svg/RainyWind'
import Snowy from './svg/Snowy'
import Stormy from './svg/Stormy'
import StromyWind from './svg/StromyWind'
import Sunny from './svg/Sunny'
import SunnyCloud from './svg/SunnyCloud'
import Thunderstorm from './svg/Thunderstorm'
import Windy from './svg/Windy'

export default class Svg extends Component {
    render() {
        return (
            <View>
                <Cloudy width={50} height={50} />
                <CloudySun width={50} height={50} />
                <Fog width={50} height={50} />
                <Lightning width={50} height={50} />
                <LightningSun width={50} height={50} />
                <Rainy width={50} height={50} />
                <RainyWind width={50} height={50} />
                <Snowy width={50} height={50} />
                <Stormy width={50} height={50} />
                <StromyWind width={50} height={50} />
                <Sunny width={50} height={50} />
                <SunnyCloud width={50} height={50} />
                <Thunderstorm width={50} height={50} />
                <Windy width={50} height={50} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
