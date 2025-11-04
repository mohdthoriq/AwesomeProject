import { useState } from "react"
import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const SimpleTouchableHighlight = () => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Simple Touchable Highlight + Feedback</Text>

                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#0056CC"
                    onPress={() => Alert.alert('Tombol 1', 'UnderLay biru gelap')}
                >
                    <Text style={styles.buttonText}>Tombol Biru</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.button, styles.greenButton]}
                    underlayColor="#028A0F"
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    onPress={() => Alert.alert('Tombol 2', 'UnderLay hijau gelap')}
                >
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>
                            {isPressed ? 'Pressed!' : 'Tombol Hijau'}
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.button, styles.roundedButton]}
                    underlayColor="#FF3B30"
                    onPress={() => Alert.alert('Tombol 3', 'UnderLay merah gelap')}
                >
                    <Text style={styles.buttonText}>Tombol Merah</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.button, styles.disableButton]}
                    underlayColor='#C7C7CC'
                    disabled={true}
                >
                    <Text style={[styles.buttonText, styles.disabledText]}>
                        Disabled Button
                    </Text>
                </TouchableHighlight>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
        width: '100%',
    },
    greenButton: {
        backgroundColor: '#34C759',
    },
    roundedButton: {
        backgroundColor: '#FF3B30',
    },
    disableButton: {
        backgroundColor: '#C7C7CC',
    },
    buttonContent: {
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    disabledText: {
        color: '#8E8E93',
    }
})

export default SimpleTouchableHighlight;