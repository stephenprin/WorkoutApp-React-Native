import { View, Text, Button } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack' 
import { useEffect } from 'react'


type navigationType = NativeStackHeaderProps

export default function HomeScreen({ navigation }: navigationType) { 
    
    useEffect(() => { 
        console.log("HomeScreen mounted")

        return () => console.log('Unmounted home' )
    }, [])
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to Planner" onPress={() => navigation.navigate("Planner")} />
        </View>
    )
}