import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';

///////===== Request Location Permission 
export const requestLocationPermission = async () => {
    return new Promise(async (resolved, rejected) => {
        if (Platform.OS === 'ios') {
            resolved(getOneTimeLocation)
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Access Required',
                        message: 'This App needs to Access your location',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) { //To Check, If Permission is granted
                    resolved(getOneTimeLocation)
                } else {
                    rejected('Permission Denied')
                }
            } catch (err) {
                rejected(err)
                console.warn(err);
            }
        }
    })
}


///////===== Request Current Location  
export const getOneTimeLocation = async () => {
    console.log('location P')
    return new Promise((resolved, rejected) => {
        Geolocation.getCurrentPosition(
            (position) => {  //Will give you the current location
                console.log('location success')
                resolved(position)
            },
            (error) => {
                console.log('location err')
                rejected(error)
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                // maximumAge: 1000
            },
        )
    })
}