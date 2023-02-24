import { View, Text, Button, StyleSheet} from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack' 


type DetailsParams = {
    route: {
        params: {
            slug: string
        }
    }
}

type navigationType = NativeStackHeaderProps & DetailsParams

export default function HomeScreen({ navigation, route}: navigationType) {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Slug- {route.params.slug}</Text>
      
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

