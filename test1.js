import React from "react";


import { View, StyleSheet, Button, Text, Alert, Switch } from 'react-native'
const Pond = () => {
	const onPressButton1 = () => {
		Alert.alert('ท่านได้ทำการเปิดระบบ')
	}
	return (
		<View style={styles.container}>

			<View style={styles.items}>
				<Button title="ON" color="green" onPress={onPressButton1} />
			</View>
			<View style={styles.items}>
				<Button title="OFF" color="#FF0000" onPress={
					() => Alert.alert('ท่านได้ทำการปิดระบบ')
				} />
			</View>	
		
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 0,
		marginLeft: 500,
		marginRight: 500,
		borderRadius:50,
		
	},
	items: {
		width: 300,		
		marginBottom: 50,		
		marginRight: 100,
		marginLeft: 80,
		
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.75,
		shadowRadius:5,
		elevation: 9,


	},
});
export default Pond;
