import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ListScreenKeyExtractor from './src/screens/ListScreenKeyExtractor';

export default function App() {
  return (
   <View style={styles.container}>
      <View>
      <Text style={styles.textStyle}>Lista de amigos</Text>
      <ListScreenKeyExtractor />
    </View>
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textStyle: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 5
  }

})