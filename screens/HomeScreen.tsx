import { View, Text, Button, StyleSheet, ImageBackground, FlatList, Pressable } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack' 
import React, { useEffect } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { workTypes } from '../types/workTypes'
import { RenderItem } from '../components/workappItem'
import { PoppinText } from '../components/styled/PoppinText'
import { getWorkout } from '../storage/workout'


type navigationType = NativeStackHeaderProps

export default function HomeScreen({ navigation }: navigationType) {

    const [workout, setWorkout] = React.useState<workTypes[]>([])
    
    useEffect(() => { 
        const getData = async () => { 
            const _workoutData = await getWorkout()
            setWorkout(_workoutData)
        }
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.header}>new workout</Text>
      
            <FlatList
                data={workout}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => navigation.navigate('workoutdetails', { slug:item.slug })}
                        >
                            <RenderItem item={item} />
                        </Pressable>
                    )
                }}
                keyExtractor={(item) => item.slug}
            
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
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

