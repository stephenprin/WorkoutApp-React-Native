import { View, Text, Button, StyleSheet} from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack' 



type navigationType = NativeStackHeaderProps

export default function HomeScreen({ navigation }: navigationType) {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Workout Details</Text>
      
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

