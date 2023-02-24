import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import { getData, storeData } from '../storage/storage';
import data from '../data.json';


export default function useCachedResources() { 
    const [isloadingComplete, setLoadingComplete] = React.useState(false);

    useEffect(() => { }, []);
    async function dataHandleResources() {
        try {
            await  storeData('workout-data', data)
            await Font.loadAsync({
                'poppins': require('../assets/fonts/Poppins-Regular.ttf'),
                'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
              
            })
        } catch (error) {
            console.warn(error);
        } finally { 
            const workout = await getData('workout-data')
            console.log(workout)
            setLoadingComplete(true);
        }
    }
    dataHandleResources();

    return isloadingComplete;

}