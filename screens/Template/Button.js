import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, btnLabel, bgcolor, textColor, style, textStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}>
            <Text
                style={{
                    color: textColor,
                    fontSize: 25,
                    fontWeight: 'bold',
                }}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;