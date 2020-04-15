import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TitledText from './TitledText'
import { colors } from '../utils/colors'

const HeadInfos = ({country, lat, lon}) => {
    return (
        <View style={styles.headInfos}>
            <Text style={styles.country}>{country}</Text>
            <View style={styles.titledTexts}>
                <TitledText title="lat: " text={lat} />
                <TitledText title="lon: " text={lon} />
            </View>
        </View>
    )
}

export default HeadInfos

const styles = StyleSheet.create({
    headInfos:{
        justifyContent: 'center',
        alignItems: "center"     
    },
    country: {
        fontSize: 31,
        color: colors.light,
        fontFamily: "Gotu-Regular"
    },
    titledTexts: {
        flexDirection: "row"
    }
})
