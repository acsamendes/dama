import React from 'react'
// IMPORT FlatList
import { Text, StyleSheet, FlatList, View } from 'react-native'

const ListScreenKeyExtractor = () => {

    const friends = [
        { name: 'Aline - ', idade: 15},
        { name: 'Rodrigo - ', idade: 17},
        { name: 'Carlos - ', idade: 18},
        { name: 'Laura - ', idade: 17},
        { name: 'Gabriel - ', idade: 19},
        { name: 'Lucas - ', idade: 20}
    ]

    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends} // THIS FlatList WILL INTERATE ALL ELEMENTS OF friends
            renderItem={(element) => {
                return <Text style={styles.textStyle}>{element.item.name} {element.item.idade}</Text>
            }} 
            />
    )
}

const styles = StyleSheet.create({
    textStyle:{
        borderWidth: '1px' 
    }
})

export default ListScreenKeyExtractor