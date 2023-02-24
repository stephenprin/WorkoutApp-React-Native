import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
   
  const isLoading = useCachedResources();
  

  if (isLoading) {
    return (
      <>
        <Navigation/>
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }

  
}



