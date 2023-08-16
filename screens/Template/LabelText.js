import React from 'react';
import { Text } from 'react-native';

const LabelText = ({ labeltext, required }) => {

  return (
    <Text style={{ marginBottom: 5, fontSize: 15, fontWeight: 'bold' }}>{labeltext}</Text>
  );
};

export default LabelText;