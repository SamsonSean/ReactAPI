import React from 'react';
import { View,TextInput} from 'react-native';
import { formStyles } from '../../assets/styles/FormStyle';
import LabelText from '../Template/LabelText';
const AddHero = ({ heroDetails, setDetails }) => {

    const updateState = (field,value) => {
        setDetails(heroDetails => ({
            ...heroDetails,
            [field] : value
        }));
    };

    return (
        <View style={formStyles.container}>
            <LabelText  labeltext={"Hero Name"}></LabelText>
            <TextInput style={formStyles.textinput} placeholder="Name"
                value={heroDetails.name}
                onChangeText={(value) => {
                    updateState("name",value);
                }}
            />
             <LabelText labeltext={"Hit Points"}></LabelText>
            <TextInput style={formStyles.textinput} placeholder="Hit Points"
                value={heroDetails.hitPoints}
                onChangeText={(value) => {
                    updateState("hitPoints",value);
                }}
            />
             <LabelText labeltext={"Strength"}></LabelText>
            <TextInput style={formStyles.textinput} placeholder="Strength"
                value={heroDetails.strength}
                onChangeText={(value) => {
                    updateState("strength",value);
                }}
            />
             <LabelText labeltext={"Defense"}></LabelText>
            <TextInput style={formStyles.textinput} placeholder="Defense"
                value={heroDetails.defense}
                onChangeText={(value) => {
                    updateState("defense",value);
                }}
            />
             <LabelText labeltext={"Intelligence"}></LabelText>
            <TextInput style={formStyles.textinput} placeholder="Intelligence"
                value={heroDetails.intelligence}
                onChangeText={(value) => {
                    updateState("intelligence",value);
                }}
            />
            <LabelText labeltext={"Class"}></LabelText>
            <TextInput style={formStyles.textinput} placeholder="Class"
                value={heroDetails.class}
                onChangeText={(value) => {
                    updateState("class",value);
                    console.log(heroDetails);
                }}
            />
        </View>
    );
};

export default AddHero;