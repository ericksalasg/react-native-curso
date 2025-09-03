import { GlobalStyles } from '@/styles/global-styles';
import React from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
    variant?: 'h1' | 'h2'
}

const ThemeText = ({ children, variant = 'h1', ...rest}: Props) => {
  return (
      <Text
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[ 
        { color: 'white', fontFamily: 'SpaceMono' }, 
        variant === 'h1' && GlobalStyles.mainResult,
        variant === 'h2' && GlobalStyles.subResult
      ]}
      {...rest}
      >
        {children}
      </Text>
  )
}

export default ThemeText