import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { setDestination } from '../slices/navSlice';

const data = [
	{
		id: '123',
		icon: 'home',
		location: 'Home',
		destination: 'Bond Lane, Bloomsburg, PA',
	},
	{
		id: '456',
		icon: 'briefcase',
		location: 'Work',
		destination: 'State Route 487, Orangeville, PA',
	},
];

const NavFavourites = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => (
				<View style={[tw`bg-gray-200`, { height: 0.5 }]} />
			)}
			renderItem={({ item: { location, destination, icon } }) => (
				<TouchableOpacity
					// onPress={() => {
					// 	dispatch(
					// 		setDestination({
					// 			description: destination,
					// 		})
					// 	);
					// 	navigation.navigate('RideOptionsCard');
					// }}
					style={tw`flex-row items-center p-5`}
				>
					<Icon
						style={tw`mr-4 rounded-full bg-gray-300 p-3`}
						name={icon}
						type='ionicon'
						color='white'
						size={18}
					/>
					<View>
						<Text style={tw`font-semibold text-lg`}>{location}</Text>
						<Text style={tw`text-gray-500`}>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavFavourites;

const styles = StyleSheet.create({});
