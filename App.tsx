import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FlexPlayground from "./src/components/FlexPlayground";
import LoginScreen from "./src/components/LoginScreen";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'flex' | 'login'>('flex');

  const renderScreen = () => {
    if (currentScreen === 'flex') {
      return <FlexPlayground />;
    } else {
      return <LoginScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[
            styles.tab, 
            currentScreen === 'flex' && styles.activeTab
          ]}
          onPress={() => setCurrentScreen('flex')}
        >
          <Text style={[
            styles.tabText,
            currentScreen === 'flex' && styles.activeTabText
          ]}>
            Flex Playground
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.tab, 
            currentScreen === 'login' && styles.activeTab
          ]}
          onPress={() => setCurrentScreen('login')}
        >
          <Text style={[
            styles.tabText,
            currentScreen === 'login' && styles.activeTabText
          ]}>
            Login Screen
          </Text>
        </TouchableOpacity>
      </View>

      {/* Screen Content */}
      <View style={styles.content}>
        {renderScreen()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: 'white',
  },
  content: {
    flex: 1,
  },
});

export default App;