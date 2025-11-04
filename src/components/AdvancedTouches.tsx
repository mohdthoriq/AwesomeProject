import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

const AdvancedTouches = () => {
    const [count, setCount] = useState(0);


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>AdvancedTouch</Text>

                <Text style={{ fontSize: 20, marginBottom: 20 }}>Count: {count}</Text>

                <TouchableOpacity
                    style={styles.opacityButton}
                    activeOpacity={0.6}
                    onPress={() => setCount(prev => prev + 1)}
                >
                    <Text style={styles.buttonText}>Tambah</Text>
                </TouchableOpacity>

                <TouchableHighlight
                    style={styles.highlightbutton}
                    underlayColor='#FF3B30'
                    onPress={() => setCount(prev => prev - 1)}
                >
                    <Text>Kurang</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    style={styles.resetButton}
                    activeOpacity={0.6}
                    onPress={() => setCount(0)}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333'
    },
    opacityButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        width: 200,
        alignItems: 'center'
    },
    highlightbutton: {
        backgroundColor: '#34C759',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        width: 200,
        alignItems: 'center'
    },
    resetButton: {
        backgroundColor: '#FF3B30',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default AdvancedTouches;