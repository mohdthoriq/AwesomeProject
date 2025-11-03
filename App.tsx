import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import HeroSection from './src/components/HeroSection';
import ProfilCard from './src/components/ProfileCard';
import LoginForm from './src/components/LoginForm';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <HeroSection />
        <ProfilCard />
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scroll: {
    flexGrow: 1,
    padding: 20,
    gap: 30, // jarak antar komponen biar gak dempet
  },
});

export default App;
