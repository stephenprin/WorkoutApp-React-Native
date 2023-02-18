import { View, Text, Button, StyleSheet, ImageBackground, FlatList } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack' 

import data from '../data.json'
import { SafeAreaView } from 'react-native-safe-area-context'
import { workTypes } from '../types/workTypes'
import { renderItem } from '../components/workappItem'


type navigationType = NativeStackHeaderProps

export default function HomeScreen({ navigation }: navigationType) {

   
    
    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>new workout</Text>
            <FlatList
                data={data as workTypes[]}
                renderItem={ renderItem}
                keyExtractor={(item) => item.slug}
            
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        fontFamily:'poppins'
           
    },
    header:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#06383ccc',
    marginBottom: 10,
    textTransform: 'uppercase',
    fontFamily:'poppins-bold'
    
     
    }

})

