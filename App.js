import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

const isAndroid = Platform.OS === 'android';

const App: () => Node = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'orange',
          marginTop: isAndroid ? StatusBar.currentHeight : 0,
        }}>
        <Text>
          {' '}
          Above gap is Temporary place-Holder to Android StatusBar Which was
          implemented automatically
        </Text>
        <View style={{padding: 16, backgroundColor: 'green'}}>
          <Text>search</Text>
        </View>
        <View style={{flex: 1, padding: 16, backgroundColor: 'blue'}}>
          <Text>lists</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};
const styles = StyleSheet.create({});

export default App;
