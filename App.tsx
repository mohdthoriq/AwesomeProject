import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import FlatListExample from './src/components/FlatListExample';
import SectionListExample from './src/components/SectionListExample';
import SimpleList from './src/components/SimpleList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <FlatListExample />
      {/* <SectionListExample/> */}
      {/* <SimpleList /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default App;
