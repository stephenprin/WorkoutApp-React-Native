import { containKey, getData, removeData, storeData } from ".";
import data from "../data.json";
import { workTypes } from "../types/workTypes";


export const getWorkout = async (): Promise<workTypes[]> => { 
    const workout = await getData('workout-data');
    return workout;
}

export const initWorkout = async ():Promise<Boolean> => { 
    const hasworkoutData = await containKey('workout-data');
    if (!hasworkoutData) {
        console.log('storing data')
        await storeData('workout-data', data)
        return true
    } else {
        return false
    }
}

export const clearWorkout = async (): Promise<Boolean> => { 
    await removeData('workout-data')
    return true
}