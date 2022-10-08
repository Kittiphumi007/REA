import React from 'react'
import { StyleSheet, View, Text, Button, Switch, Alert, Image } from 'react-native'
//import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import globalStyles from './global-styles'
import Card from './test1'

export default function TabHome6({ navigation }) {
    return (
        <View style={StyleSheet.create}>
            <View style={styles.items}>
                <Text style={{ fontSize: 50, color: '', textAlign: 'center' }}>ระบบไฟไล่แมลง</Text>

            </View>
            <View>
                <Image
                    source={require = ('./assets/01.jpg')}
                />
            </View>
            <View style={styles.items1}>
                <Card />
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    Headers: {

    },
    items: {
        backgroundColor: '#FF0066',
        marginTop: 20,
        marginBottom: 50,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,

    },
    items1: {
        backgroundColor: '#FF0066',
        marginTop: 400,
        marginBottom: 40,
        paddingTop: 30,
        paddingBottom: 30,
        paddingEnd: 0,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,


    },
    items2: {
        backgroundColor: 'Green',
        marginTop: 20,
    },
    items3: {
        backgroundColor: 'Green',
        marginTop: 20,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})
