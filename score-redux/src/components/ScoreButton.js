import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ScoreButton = ({ color, onPress, children }) => {
  const styles = {
    textStyle: {
      alignSelf: 'center',
      color,
      fontSize: 36,
      fontWeight: '600',
      // paddingTop: 10,
      // paddingBottom: 5
    },
    buttonStyle: {
      flex: 0.1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: color,
      marginLeft: 5,
      marginRight: 5
    }
  };

  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
export default ScoreButton;
