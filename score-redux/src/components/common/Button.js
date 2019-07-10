import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ color, onPress, children }) => {
  const styles = {
    textStyle: {
      alignSelf: 'center',
      color: color || '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: color || '#007aff',
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

export { Button };
