import { useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native"

const SimpleButtons = () => {
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => Alert.alert("Button pressed!")

    const handlePressIn = () => setIsPressed(true)

    const handlePressOut = () => setIsPressed(false)


    return (
        <>
            <View style={styles.container}>
                <Button title="Press me" onPress={handlePress} color="#007AFF" />
                <Button title="Tombol Disable" onPress={handlePress} disabled={true} color="gray" />
            </View>
            <View style={styles.container}>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed ? '#0056CC' : '#007AFF',
                            transform: [{ scale: pressed ? 0.95 : 1 }]
                        }
                    ]}
                    onPress={handlePress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    {({ pressed }) => (
                        <Text style={styles.buttonText}>
                            {pressed ? 'Pressed!' : 'Press Me'}
                        </Text>
                    )}
                </Pressable>
                

                <Pressable
                    style = {styles.buttonSecondary}
                    onPress={handlePress}
                    android_ripple={{ color: 'white', borderless: false }}
                >
                    {({ pressed }) => (
                    <Text style={styles.buttonText}>
                        {pressed ? 'Ripple Pressed!' : 'Ripple Button'}
                    </Text>
                    )}
                </Pressable>

                <Pressable
                    style={styles.buttonTertiary}
                    onPress={() => Alert.alert('Press Pendek')}
                    onLongPress={() => Alert.alert('Long Press', 'Anda menekan lama ( lebih dari 800ms )')}
                    delayLongPress={800}
                >
                    <Text style={styles.buttonText}>Long Press Me</Text>
                </Pressable>        
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
    },
    button: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        minWidth: 200,
        alignItems: 'center'
    },
    buttonSecondary: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: '#34C759',
        minWidth: 200,
        alignItems: 'center',
        overflow: 'hidden'
    },
    buttonTertiary: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: '#FF9500',
        minWidth: 200,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    }


})

export default SimpleButtons;