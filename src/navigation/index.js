import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '@navigation/AuthStack';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
