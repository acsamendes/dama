import React from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'

const LoginScreen = (props) => {
    console.log(props)
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>User</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter your username"
                />

                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter your password"
                />

                <Button style={styles.button}
                    onPress={() => {
                        console.log('button pressed')
                        navigation.navigate('Home')
                    }}
                    title="Entrar" />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 20,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 5,
    },

    button: {
        margin: 20,
        padding: 10
    }
})

export default LoginScreen