import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Home />
    </>
  );
}
