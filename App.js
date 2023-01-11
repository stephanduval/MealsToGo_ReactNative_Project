import React from 'react';
import type {Node} from 'react';
import {Searchbar} from 'react-native-paper';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

const isAndroid = Platform.OS === 'android';

const App: () => Node = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>
          {' '}
          Above gap is Temporary place-Holder to Android StatusBar Which was
          implemented automatically
        </Text>
        <View style={styles.search}>
          <Text>search</Text>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>lists</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
    backgroundColor: 'green',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});

export default App;
