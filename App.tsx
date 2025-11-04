import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AdvancedTouches from './src/components/AdvancedTouches';
import SimpleTouchableHighlight from './src/components/FeedbackButtons';
import SimpleButtons from './src/components/SImpleButtons';

type ComponentInfo = {
  title: string;
  component: React.ReactElement;
  description: string;
};

const App = () => {
  const components = {
    simple: {
      title: 'Simple Buttons',
      component: <SimpleButtons />,
      description: 'Tombol-tombol dasar dengan berbagai variasi'
    },
    feedback: {
      title: 'Touchable Feedback',
      component: <SimpleTouchableHighlight />,
      description: 'Tombol dengan feedback visual'
    },
    advanced: {
      title: 'Advanced Touches',
      component: <AdvancedTouches />,
      description: 'Implementasi touch yang lebih advanced'
    }
  };

  const [activeTab, setActiveTab] = useState<keyof typeof components>('simple');

  const tabs = [
    { id: 'simple', label: 'Simple' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'advanced', label: 'Advanced' }
  ] as const;

  const data = [components[activeTab]];

  const renderItem = ({ item }: { item: ComponentInfo }) => (
    <View style={styles.contentContainer}>
      <Text style={styles.contentTitle}>{item.title}</Text>
      <Text style={styles.contentDescription}>{item.description}</Text>
      <View style={styles.componentWrapper}>
        {item.component}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Button Components</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              activeTab === tab.id && styles.activeTab
            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab.id && styles.activeTabText
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
  },
  listContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  contentDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  componentWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;