import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';






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
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //To Check, If Permission is granted

                    resolved(getOneTimeLocation)
                    //subscribeLocationLocation();
                } else {
                    rejected('Permission Denied')
                    //setLocationStatus('Permission Denied');
                }
            } catch (err) {
                rejected(err)
                console.warn(err);
            }
        }

    })
}



export const getOneTimeLocation = async () => {
    console.log('location P')
    return new Promise((resolved, rejected) => {
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                console.log('location success')
                resolved(position)
            },
            (error) => {
                console.log('location err')
                rejected(error)
                // setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
               // maximumAge: 1000
            },
        )
    })
}