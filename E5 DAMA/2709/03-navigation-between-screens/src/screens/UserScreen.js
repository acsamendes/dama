import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const UserScreen = () => {
    const name = 'Acsa Mendes dos Santos'
    const age = '17'
    const email = 'acsamendes@gmail.com'
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textTitle}>Name</Text>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.textTitle}>Age</Text>
                <Text style={styles.text}>{age}</Text>
                <Text style={styles.textTitle}>Email</Text>
                <Text style={styles.text}>{email}</Text>
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

export default UserScreen