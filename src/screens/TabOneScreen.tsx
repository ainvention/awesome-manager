import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import tailwind from 'tailwind-rn';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={tailwind('flex-1 items-center justify-center')}>
      <Image style={styles.background} source={require('../assets/images/jh160019.jpg')} />
      <Text style={tailwind('flex text-lg bg-')}>Tab One</Text>
      <View
        style={tailwind('bg-red-200 mx-32 h-1 w-80')}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});
