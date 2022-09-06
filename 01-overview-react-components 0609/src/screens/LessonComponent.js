//imports

import React from 'react'; 
import { Text, StyleSheet, View } from 'react-native';

//declarar função

const LessonComponent = () => {
    
        const greeting = 'Iniciando React Native!'
        const name = 'Acsa'
    
        return (
            <View>
                <Text style={styles.titulo}>{greeting}</Text> 
                <Text style={styles.textStyle}>Meu nome é {name}</Text>
                
            </View>
        )
    }

    const styles = StyleSheet.create({

        titulo: {
            fontSize: 45,
            color: '#086788'
        },

        textStyle: {
            fontSize: 20
        } 
        

    })    
    

//exportar

export default LessonComponent
