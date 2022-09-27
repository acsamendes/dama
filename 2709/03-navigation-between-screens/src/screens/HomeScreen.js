// PART 1 - IMPORT LIBRARIES
import React from 'react'; // importing entire library
import { Text, StyleSheet, View } from 'react-native'; // importing some piees of react-native

// PART 2 - CREATE A COMPONENT 
// A FUNCTION THAT RETURNS SOME JSX
const HomeScreen = () => {
    const name = 'Acsa'
    const greeting = "How are you feeling?"

    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.textStyle}>Welcome {name} to our firt project</Text>
            <Text style={styles.textStyle}>Now we can navigate between screens!</Text>
            <Text style={styles.textStyle}>{greeting}</Text>
            <Button style={styles.button}
                    onPress={() => {
                        console.log('button pressed')
                        navigation.navigate('User')
                    }}
                    title="User Details" />
            <Button style={styles.button}
                    onPress={() => {
                        console.log('button pressed')
                        navigation.navigate('About')
                    }}
                    title="About" />
        </View>
        </View>
        
    )
}

// PART 3 CREATE A STYLESHEET TO STYLE OUR COMPONENT
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle:{
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        margin: 20,
        padding: 10
    }
})

// PART 4 - EXPORT THE COMPONENT SO WE CAN USE IT ELSEWHERE IN OUR PROJECT
export default HomeScreen



