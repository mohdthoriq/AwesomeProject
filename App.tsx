import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import HeroSection from './src/components/SimpleList';
import ProfilCard from './src/components/FlatListExample';
import LoginForm from './src/components/SectionListExample';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <HeroSection />
        <ProfilCard />
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  scroll: { flexGrow: 1, padding: 20, gap: 20 },
});

export default App;
