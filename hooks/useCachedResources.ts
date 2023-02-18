import React, { useEffect } from 'react';
import * as Font from 'expo-font';


export default function useCachedResources() { 
    const [isloadingComplete, setLoadingComplete] = React.useState(false);

    useEffect(() => { }, []);
    async function dataHandleResources() {
        try {
            await Font.loadAsync({
                'poppins': require('../assets/fonts/Poppins-Regular.ttf'),
                'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
              
            })
        } catch (error) {
            console.warn(error);
        } finally { 
            setLoadingComplete(true);
        }
    }
    dataHandleResources();

    return isloadingComplete;

}