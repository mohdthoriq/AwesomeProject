import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
    PixelRatio,
    ScrollView,
    KeyboardAvoidingView,
    StatusBar,
    Alert,
    ViewStyle,
    TextStyle,
    ImageStyle
} from 'react-native';

// Type definitions for better TypeScript support
type FontWeight =
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;

interface TypographyStyle {
    fontSize: number;
    fontWeight: FontWeight;
    lineHeight: number;
    color?: string;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

// Design System Constants
const Colors = {
    primary: '#007AFF',
    primaryDark: '#0056CC',
    background: '#24dce9ff',
    surface: '#2f629cff',
    textPrimary: '#1A1A1A',
    textSecondary: '#666666',
    textTertiary: '#444343ff',
    border: '#ffffffff',
    error: '#FF3B30',
    success: '#4CD964',
    warning: '#FF9500',
};

const Spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

const Typography: { [key: string]: TypographyStyle } = {
    h1: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 40,
    },
    h2: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 32,
    },
    body: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    caption: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 20,
    },
    button: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
    },
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

// Responsive scaling function
const normalizeSize = (size: number): number => {
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            Alert.alert('Success', 'Login successful!');
        }, 1500);
    };

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.background}
            />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logo}>
                            <Text style={styles.logoText}>🎯</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subtitle}>Sign in to continue your journey</Text>
                </View>

                {/* Login Form */}
                <View style={styles.formContainer}>
                    {/* Email Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your email"
                            placeholderTextColor={Colors.textTertiary}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            autoComplete="email"
                            keyboardType="email-address"
                            editable={!isLoading}
                        />
                        <View style={styles.inputBorder} />
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={[styles.textInput, styles.passwordInput]}
                                placeholder="Enter your password"
                                placeholderTextColor={Colors.textTertiary}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={secureTextEntry}
                                autoCapitalize="none"
                                editable={!isLoading}
                            />
                            <TouchableOpacity
                                style={styles.visibilityToggle}
                                onPress={toggleSecureEntry}
                                disabled={isLoading}
                            >
                                <Icon
                                    name={secureTextEntry ? "visibility" : "visibility-off"}
                                    size={30}
                                    color="#252525ff"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputBorder} />
                    </View>

                    {/* Forgot Password */}
                    <TouchableOpacity
                        style={styles.forgotPasswordContainer}
                        disabled={isLoading}
                    >
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    {/* Login Button */}
                    <TouchableOpacity
                        style={[
                            styles.loginButton,
                            isLoading && styles.loginButtonDisabled
                        ]}
                        onPress={handleLogin}
                        disabled={isLoading}
                        activeOpacity={0.8}
                    >
                        {isLoading ? (
                            <View style={styles.loadingContainer}>
                                <Text style={styles.loginButtonText}>Signing In...</Text>
                            </View>
                        ) : (
                            <Text style={styles.loginButtonText}>Sign In</Text>
                        )}
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.divider} />
                    </View>

                    {/* Social Login */}
                    <View style={styles.socialLoginContainer}>
                        <TouchableOpacity
                            style={styles.socialButton}
                            disabled={isLoading}
                        >
                            <Text style={styles.socialButtonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.socialButton,
                                styles.socialButtonApple
                            ]}
                            disabled={isLoading}
                        >
                            <Text style={[
                                styles.socialButtonText,
                                styles.socialButtonTextApple
                            ]}>
                                Continue with Apple
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Sign Up Section */}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity disabled={isLoading}>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

// TypeScript-friendly StyleSheet dengan type assertions yang tepat
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        minHeight: SCREEN_HEIGHT - (StatusBar.currentHeight || 0),
        paddingHorizontal: Spacing.lg,
    },
    header: {
        alignItems: 'center',
        marginBottom: Spacing.xxl,
    } as ViewStyle,
    logoContainer: {
        marginBottom: Spacing.lg,
    } as ViewStyle,
    logo: {
        width: normalizeSize(80),
        height: normalizeSize(80),
        borderRadius: normalizeSize(40),
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: Colors.primary,
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 16,
            },
            android: {
                elevation: 8,
                shadowColor: Colors.primary,
            },
        }),
    } as ViewStyle,
    logoText: {
        fontSize: normalizeSize(32),
    } as TextStyle,
    title: {
        fontSize: Typography.h1.fontSize,
        fontWeight: Typography.h1.fontWeight,
        lineHeight: Typography.h1.lineHeight,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: Spacing.sm,
    } as TextStyle,
    subtitle: {
        fontSize: Typography.body.fontSize,
        fontWeight: Typography.body.fontWeight,
        lineHeight: Typography.body.lineHeight,
        color: Colors.textSecondary,
        textAlign: 'center',
    } as TextStyle,
    formContainer: {
        backgroundColor: Colors.surface,
        borderRadius: normalizeSize(16),
        padding: Spacing.lg,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
            },
            android: {
                elevation: 4,
                shadowColor: '#000',
            },
        }),
    } as ViewStyle,
    inputGroup: {
        marginBottom: Spacing.lg,
    } as ViewStyle,
    label: {
        fontSize: Typography.caption.fontSize,
        fontWeight: Typography.caption.fontWeight,
        lineHeight: Typography.caption.lineHeight,
        color: Colors.textPrimary,
        marginBottom: Spacing.sm,
    } as TextStyle,
    textInput: {
        fontSize: Typography.body.fontSize,
        fontWeight: Typography.body.fontWeight,
        lineHeight: Typography.body.lineHeight,
        color: Colors.textPrimary,
        paddingVertical: Spacing.md,
        paddingHorizontal: 0,
    } as TextStyle,
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    } as ViewStyle,
    passwordInput: {
        flex: 1,
    } as TextStyle,
    visibilityToggle: {
        padding: Spacing.sm,
    } as ViewStyle,
    inputBorder: {
        height: 1,
        backgroundColor: Colors.border,
        marginTop: Spacing.xs,
    } as ViewStyle,
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginBottom: Spacing.lg,
    } as ViewStyle,
    forgotPasswordText: {
        fontSize: Typography.caption.fontSize,
        fontWeight: '500' as FontWeight,
        lineHeight: Typography.caption.lineHeight,
        color: Colors.primary,
    } as TextStyle,
    loginButton: {
        backgroundColor: Colors.primary,
        borderRadius: normalizeSize(12),
        paddingVertical: Spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: Colors.primary,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
                shadowColor: Colors.primary,
            },
        }),
    } as ViewStyle,
    loginButtonDisabled: {
        backgroundColor: Colors.textTertiary,
        ...Platform.select({
            ios: {
                shadowOpacity: 0.1,
            },
            android: {
                elevation: 2,
            },
        }),
    } as ViewStyle,
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    } as ViewStyle,
    loginButtonText: {
        fontSize: Typography.button.fontSize,
        fontWeight: Typography.button.fontWeight,
        lineHeight: Typography.button.lineHeight,
        color: Colors.background,
    } as TextStyle,
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Spacing.lg,
    } as ViewStyle,
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.border,
    } as ViewStyle,
    dividerText: {
        fontSize: Typography.caption.fontSize,
        fontWeight: Typography.caption.fontWeight,
        lineHeight: Typography.caption.lineHeight,
        color: Colors.textTertiary,
        marginHorizontal: Spacing.md,
    } as TextStyle,
    socialLoginContainer: {
        gap: Spacing.md,
    } as ViewStyle,
    socialButton: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: normalizeSize(12),
        paddingVertical: Spacing.md,
        alignItems: 'center',
        backgroundColor: Colors.background,
    } as ViewStyle,
    socialButtonApple: {
        backgroundColor: Colors.textPrimary,
        borderColor: Colors.textPrimary,
    } as ViewStyle,
    socialButtonText: {
        fontSize: Typography.button.fontSize,
        fontWeight: Typography.button.fontWeight,
        lineHeight: Typography.button.lineHeight,
        color: Colors.textPrimary,
    } as TextStyle,
    socialButtonTextApple: {
        color: Colors.background,
    } as TextStyle,
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Spacing.xl,
        marginBottom: Spacing.xxl,
    } as ViewStyle,
    signupText: {
        fontSize: Typography.body.fontSize,
        fontWeight: Typography.body.fontWeight,
        lineHeight: Typography.body.lineHeight,
        color: Colors.textSecondary,
    } as TextStyle,
    signupLink: {
        fontSize: Typography.body.fontSize,
        fontWeight: '600' as FontWeight,
        lineHeight: Typography.body.lineHeight,
        color: Colors.primary,
    } as TextStyle,
});

export default LoginScreen;