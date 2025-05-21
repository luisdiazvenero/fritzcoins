import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Eye, EyeOff, Coins } from 'lucide-react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

export default function RegisterStep1Screen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleNext = () => {
    // Here you would typically validate the form
    router.push('/register/step2');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Crear cuenta" showBackButton={true} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <View style={styles.stepIndicator}>
              <Text style={styles.stepText}>Paso 1 de 2</Text>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nombre completo</Text>
                <TextInput
                  style={styles.input}
                  value={formData.name}
                  onChangeText={(text) => setFormData({ ...formData, name: text })}
                  placeholder="Ingresa tu nombre completo"
                  autoCapitalize="words"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Correo electrónico</Text>
                <TextInput
                  style={styles.input}
                  value={formData.email}
                  onChangeText={(text) => setFormData({ ...formData, email: text })}
                  placeholder="Ingresa tu correo electrónico"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Contraseña</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                    placeholder="Ingresa tu contraseña"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    {showPassword ? (
                      <EyeOff size={20} color={Colors.text.tertiary} />
                    ) : (
                      <Eye size={20} color={Colors.text.tertiary} />
                    )}
                  </TouchableOpacity>
                </View>
                <Text style={styles.helperText}>
                  La contraseña debe tener al menos 8 caracteres
                </Text>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirmar contraseña</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    value={formData.confirmPassword}
                    onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                    placeholder="Confirma tu contraseña"
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={styles.eyeIcon}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} color={Colors.text.tertiary} />
                    ) : (
                      <Eye size={20} color={Colors.text.tertiary} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Número de teléfono</Text>
                <TextInput
                  style={styles.input}
                  value={formData.phone}
                  onChangeText={(text) => setFormData({ ...formData, phone: text })}
                  placeholder="+58 XXX-XXX-XXXX"
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.termsContainer}>
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={() => setAcceptTerms(!acceptTerms)}
                >
                  <View style={[
                    styles.checkboxInner,
                    acceptTerms && styles.checkboxChecked
                  ]} />
                </TouchableOpacity>
                <Text style={styles.termsText}>
                  Acepto los{' '}
                  <Text style={styles.termsLink}>términos y condiciones</Text>
                </Text>
              </View>

              <Button
                title="Continuar"
                onPress={handleNext}
                variant="primary"
                size="large"
                fullWidth
                style={styles.button}
              />
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
  },
  content: {
    flex: 1,
    padding: Layout.spacing.xl,
  },
  stepIndicator: {
    alignItems: 'center',
    marginBottom: Layout.spacing.xl,
  },
  stepText: {
    fontSize: 16,
    color: Colors.text.secondary,
    fontFamily: 'Inter-Medium',
  },
  formContainer: {
    width: '100%',
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
    height: '100%',
    paddingHorizontal: Layout.spacing.m,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  eyeIcon: {
    padding: Layout.spacing.m,
  },
  helperText: {
    fontSize: 12,
    color: Colors.text.tertiary,
    marginTop: Layout.spacing.xs,
    fontFamily: 'Inter-Regular',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xl,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Colors.primary.default,
    borderRadius: 4,
    marginRight: Layout.spacing.s,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: Colors.primary.default,
  },
  termsText: {
    fontSize: 14,
    color: Colors.text.secondary,
    fontFamily: 'Inter-Regular',
  },
  termsLink: {
    color: Colors.primary.default,
    fontFamily: 'Inter-Medium',
  },
  button: {
    marginTop: Layout.spacing.m,
  },
});