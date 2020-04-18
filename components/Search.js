import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../utils/colors'

const Search = ({onSubmitEditing}) => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchIcon}>
                <MaterialIcons name="pin-drop" size={21} color={colors.light} />
            </View>
            <TextInput 
                style={styles.textInput} 
                onSubmitEditing={onSubmitEditing}
                placeholder="The city name"
                placeholderTextColor={colors.lightOpacity}
                />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: colors.lightOpacity,
        borderBottomWidth: 1
    },
    textInput: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontSize: 14.5,
        color: colors.light,
    },
    searchIcon:{
        justifyContent: "center",
        alignItems: "center",
        width: 37,
        height: 37,
        marginRight: 5
    },
})


                