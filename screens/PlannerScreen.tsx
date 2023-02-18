import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack' 

type navigationType = NativeStackHeaderProps

export default function PlannerScreen({ navigation }: navigationType) { 
    
    useEffect(() => { 
        console.log("PlannerScreen mounted")

        return () => console.log('Unmounted planner' )
    }, [])
    return (
        <View>
            <Text>Planner Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}