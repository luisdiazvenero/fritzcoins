import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Eye, EyeOff, Coins, ArrowRight } from 'lucide-react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    router.push('/(tabs)/wallet');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
        showBackButton={true}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Coins size={40} color={Colors.primary.default} />
            <Text style={styles.logoText}>FritzCoins</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.welcomeText}>
              {isLogin ? '¡Bienvenido de nuevo!' : '¡Únete a FritzCoins hoy!'}
            </Text>
            
            {!isLogin && (
              <View style={styles.bonusContainer}>
                <Text style={styles.bonusText}>
                  ¡Regístrate y recibe 500 FritzCoins como bono de bienvenida!
                </Text>
              </View>
            )}

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Usuario o Email</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Ingresa tu usuario o email"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Contraseña</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Ingresa tu contraseña"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.eyeIcon}
                >
                  {showPassword ? (
                    <EyeOff size={20} color={Colors.text.tertiary} />
                  ) : (
                    <Eye size={20} color={Colors.text.tertiary} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {isLogin && (
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>
            )}

            <Button
              title={isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
              onPress={handleSubmit}
              variant="primary"
              size="large"
              fullWidth
              rightIcon={<ArrowRight size={20} color={Colors.secondary.default} style={{ marginLeft: 8 }} />}
              style={styles.submitButton}
            />

            <View style={styles.switchContainer}>
              <Text style={styles.switchText}>
                {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
              </Text>
              <TouchableOpacity onPress={toggleAuthMode}>
                <Text style={styles.switchActionText}>
                  {isLogin ? 'Regístrate' : 'Inicia sesión'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: Layout.spacing.xl,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Layout.spacing.xxl,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.primary.default,
    marginLeft: Layout.spacing.s,
    fontFamily: 'Poppins-Bold',
  },
  formContainer: {
    width: '100%',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.l,
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
  },
  bonusContainer: {
    backgroundColor: Colors.success.light,
    padding: Layout.spacing.m,
    borderRadius: Layout.borderRadius.medium,
    marginBottom: Layout.spacing.l,
  },
  bonusText: {
    fontSize: 14,
    color: Colors.success.default,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  inputContainer: {
    marginBottom: Layout.spacing.l,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.xs,
    fontFamily: 'Inter-Medium',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: Layout.borderRadius.medium,
    paddingHorizontal: Layout.spacing.m,
    fontSize: 16,
    backgroundColor: Colors.background.light,
    fontFamily: 'Inter-Regular',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: Layout.borderRadius.medium,
    backgroundColor: Colors.background.light,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: Layout.spacing.m,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  eyeIcon: {
    padding: Layout.spacing.m,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: Layout.spacing.l,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: Colors.primary.default,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  submitButton: {
    marginTop: Layout.spacing.m,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Layout.spacing.xl,
  },
  switchText: {
    fontSize: 14,
    color: Colors.text.secondary,
    fontFamily: 'Inter-Regular',
  },
  switchActionText: {
    fontSize: 14,
    color: Colors.primary.default,
    fontWeight: '600',
    marginLeft: Layout.spacing.xs,
    fontFamily: 'Inter-SemiBold',
  },
});