import { View, Text, Button, StyleSheet, ImageBackground, FlatList } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack' 
import { useEffect } from 'react'
import data from '../data.json'
import { SafeAreaView } from 'react-native-safe-area-context'


type navigationType = NativeStackHeaderProps

export default function HomeScreen({ navigation }: navigationType) {

    const renderItem = ({ item }: any) =>
        <View>
              <Text style={styles.title}>{item.name}</Text>
             <Text style={styles.diff}>{item.difficulty}</Text>
      </View>
    
    

    return (
        <SafeAreaView style={styles.container}>
        
            <FlatList
                data={data}
                renderItem={ renderItem}
                keyExtractor={(item) => item.slug}
            
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
       
        
    },
    title:{
    fontSize: 16,
        fontWeight: 'bold',
        color: 'maroon',
    },
    diff: {
        fontSize: 14,
        color: 'black',
    }
})