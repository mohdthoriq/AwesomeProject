import { useState } from "react"
import { FlexStyle, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const FlexPlayground = () => {
    const [flexDirection, setFlexDirection] = useState<FlexStyle['flexDirection']>('row')
    const [justifyContent, setJustifyContent] = useState<FlexStyle['justifyContent']>('flex-start')
    const [alignItems, setAlignItems] = useState<FlexStyle['alignItems']>('flex-start')


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Flexbox Playground</Text>

                <ScrollView style={styles.controlsContainer}>
                    {/* Flex Direction Controls */}
                    <View style={styles.controlGroup}>
                        <Text style={styles.controlTitle}>Flex Direction:</Text>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={[
                                styles.button,
                                flexDirection === 'row' && styles.activeButton
                            ]}
                                onPress={() => setFlexDirection('row')}
                            >
                                <Text style={styles.buttonText}>row</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[
                                styles.button,
                                flexDirection === 'column' && styles.activeButton
                            ]}
                                onPress={() => setFlexDirection('column')}
                            >
                                <Text style={styles.buttonText}>Column</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[
                                styles.button,
                                flexDirection === 'row-reverse' && styles.activeButton
                            ]}
                                onPress={() => setFlexDirection('row-reverse')}
                            >
                                <Text style={styles.buttonText}>Row Rverse</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Justify Content Controls */}
                    <View style={styles.controlGroup}>
                        <Text style={styles.controlTitle}>Justify Content:</Text>

                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={[
                                styles.button,
                                justifyContent === 'flex-start' && styles.activeButton
                            ]}
                                onPress={() => setJustifyContent('flex-start')}
                            >
                                <Text style={styles.buttonText}>Flex Start</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[
                                styles.button,
                                justifyContent === 'center' && styles.activeButton
                            ]}
                                onPress={() => setJustifyContent('center')}
                            >
                                <Text style={styles.buttonText}>Center</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[
                                styles.button,
                                justifyContent === 'space-between' && styles.activeButton
                            ]}
                                onPress={() => setJustifyContent('space-between')}
                            >
                                <Text style={styles.buttonText}>Space Between</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Align Items Controls */}
                    <View style={styles.controlGroup}>
                        <Text style={styles.controlTitle}>Align Items:</Text>

                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={[
                                styles.button,
                                alignItems === 'flex-start' && styles.activeButton
                            ]}
                                onPress={() => setAlignItems('flex-start')}
                            >
                                <Text style={styles.buttonText}>Flex Start</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[
                                styles.button,
                                alignItems === 'center' && styles.activeButton
                            ]}
                                onPress={() => setAlignItems('center')}
                            >
                                <Text style={styles.buttonText}>Center</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[
                                styles.button,
                                alignItems === 'stretch' && styles.activeButton
                            ]}
                                onPress={() => setAlignItems('stretch')}
                            >
                                <Text style={styles.buttonText}>Stretch</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                {/* Flexbox Container */}
                <View style={[
                    styles.flexContainer,
                    {
                        flexDirection: flexDirection,
                        justifyContent: justifyContent,
                        alignItems: alignItems,
                    }
                ]}>
                    <View style={[styles.box, styles.redBox]} />
                    <View style={[styles.box, styles.blueBox]} />
                    <View style={[styles.box, styles.greenBox]} />
                </View>

                {/* Current Settings Display */}
                <View style={styles.settingsDisplay}>
                    <Text style={styles.settingsText}>
                        flexDirection: {flexDirection}
                    </Text>
                    <Text style={styles.settingsText}>
                        justifyContent: {justifyContent}
                    </Text>
                    <Text style={styles.settingsText}>
                        alignItems: {alignItems}
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24dce9ff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#525151ff',
  },
  controlsContainer: {
    maxHeight: 300,
    marginBottom: 20,
  },
  controlGroup: {
    marginBottom: 20,
    backgroundColor: '#2f629cff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  controlTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#f5ebebff',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  flexContainer: {
    flex: 1,
    backgroundColor: '#2f629cff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 8,
    margin: 4,
  },
  redBox: {
    backgroundColor: '#FF3B30',
  },
  blueBox: {
    backgroundColor: '#007AFF',
  },
  greenBox: {
    backgroundColor: '#4CD964',
  },
  settingsDisplay: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  settingsText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});

export default FlexPlayground;