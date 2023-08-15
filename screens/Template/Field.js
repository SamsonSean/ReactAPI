import React from "react";
import { TextInput } from "react-native";

const Field = (props) => {
    return (
        <TextInput {...props}
            style={props.style}
        ></TextInput>
    )
}

export default Field;