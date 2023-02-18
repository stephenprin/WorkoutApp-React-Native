import { View, Text, Button, StyleSheet, ImageBackground, FlatList } from 'react-native'
import { workTypes } from '../types/workTypes'



export const renderItem = ({ item }: { item: workTypes }) =>
        
<View style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.duration}>Duration:{item.duration}</Text>
     <Text style={styles.diff}>Difficulty:{item.difficulty}</Text>
</View>

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 10,
    
        borderRadius: 5,
       
        backgroundColor:'white'
       
        
    },

    name:{
           fontSize: 16,
            fontWeight: 'bold',
            color: 'maroon',
    },
    duration: {
        fontSize: 15,
        color: 'black',
    },
        diff: {
            fontSize: 14,
            color: 'black',
        }
})