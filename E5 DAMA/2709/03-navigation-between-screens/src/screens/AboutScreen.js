import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const AboutScreen = () => {
    const name = 'Acsa Mendes dos Santos'
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textTitle}>About</Text>
                <Text style={styles.text}>Developed by {name}</Text>
                <Text style={styles.textTitle}>Version</Text>
                <Text style={styles.text}>FirtApp version 1.0</Text>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    textTitle:{
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10
    },

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text : {
        fontSize: 15
    }

})

export default AboutScreen