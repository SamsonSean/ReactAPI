import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import AddHero from './Forms/AddHero';
import { API_URL } from '../url/APIurl';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HeroForm = ({ navigation }) => {
    const [heroDetails, setDetails] = useState(
        {
            "name": "string",
            "hitPoints": 0,
            "strength": 0,
            "defense": 0,
            "intelligence": 0,
            "class": "Knight"
        }
    )

    const sendData = async() => {
        try{
            const tokenn = await AsyncStorage.getItem('token');
            fetch(API_URL + 'api/Character',{
            method: 'POST',
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenn}`
            },
            body:JSON.stringify(heroDetails)
            })
            .then((response) => {
                console.log(JSON.stringify(response));
                return response.json();
            })
            .then((json) => {
                console.log(JSON.stringify(json));
            })
            .catch((error) => {
                console.log(error);
            })
        }catch(e){
            console.log(e)
        }
    }

    return (
        <>
            <View style={HeroFormStyle.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingLeft: 60, paddingRight: 60, }}>
                    <AddHero heroDetails={heroDetails} setDetails={setDetails} ></AddHero>
                    <View style={HeroFormStyle.btnContainer}>
                        <Pressable
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <Text style={HeroFormStyle.button}>Back</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                sendData();
                            }}
                        >
                            <Text style={HeroFormStyle.button}>Create</Text>
                        </Pressable>
                    </View>
                </ScrollView>

            </View>
        </>
    );
};

const HeroFormStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 0,
        paddingRight: 0,
    },
    btnContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        color: '#FFFFFF',
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginLeft: 30,
        textAlign: 'center',
        borderRadius: 10
    }
})


export default HeroForm;