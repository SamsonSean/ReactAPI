import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_URL } from '../url/APIurl';

const Hero = () => {
    const [ownerData, setOwnerData] = useState([]);
    const [text, setText] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function FetchOwners() {
        try {
            const tokenn = await AsyncStorage.getItem('token');
            fetch(API_URL + 'api/Character/GetAll', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenn}`
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw ("Bad Request")
                    } else if (response.status === 401) {
                        AsyncStorage.removeItem('token');
                        navigation.navigate('Login');
                    }
                    return response.json();
                })
                .then((json) => {
                    setOwnerData(json.data);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => setIsLoading(false));

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchOwners();
    }, []);

    const Item = React.memo(({ item, onPress, style }) => {
        return (
            <TouchableOpacity onPress={onPress} style={[ListStyle.item, style]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={ListStyle.title}>Hero: {item.name}</Text>
                        <Text style={ListStyle.title}>Class: {item.class}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: 'white', textDecorationLine:'underline', textDecorationColor:'white', margin: 0 }}>View</Text>
                        <Icon name="arrow-forward-outline" size={20} color="white" style={{ marginLeft: 0 }} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    });

    const renderItem = ({ item }) => {

        return (
            <Item
                item={item}
                onPress={() => {
                    console.log('navigate to hero details');
                }}
                style={{ backgroundColor: "black" }}
            />
        );
    };

    return (
        <SafeAreaView style={ListStyle.container}>
            <View style={ListStyle.searchContainer}>
                <TextInput
                    style={ListStyle.input}
                    placeholder="Search Owner Id..."
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <TouchableOpacity style={ListStyle.searchButton} onPress={() => console.log('add owner')}>
                    <Icon name="search" size={22} color="white" />
                </TouchableOpacity>
            </View>
            {(isLoading) ? <ActivityIndicator size={22} color="black"></ActivityIndicator> : (
                <FlatList
                    data={ownerData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.Id}
                />
            )}
        </SafeAreaView>
    );
};


const ListStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    item: {
        padding: 20,
        minHeight: 100,
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#018579',
    },
    itemBio: {
        fontSize: 18,
        color: '#f6e7e7',
    },
    title: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderBottomWidth: 0.5,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#eee',
        overflow: 'hidden',
    },
    searchButton: {
        backgroundColor: '#009688',
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,

    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 'auto',
    },
})

export default Hero;