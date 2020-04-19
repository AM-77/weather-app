import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/colors';

const TitledText = ({title, text, size}) => {

    let styles = StyleSheet.create({
        contianer:{
            flexDirection: "row",
            marginLeft: 5,
            marginRight: 5,
            alignItems: "baseline"
        }, 
        title: {
            fontSize: size,
            color: colors.light,
            textTransform: "capitalize",
        },
        text: {
            fontSize: size,
            color: colors.lightOpacity,
            fontWeight: "700"
        }
    })

    return (
        <View style={styles.contianer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default TitledText

