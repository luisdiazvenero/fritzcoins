import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
const FritzCoinsLogo = require('../../assets/images/fritzcoins-logo-r.png');

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
    padding: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoImage: {
    width: 300,
    height: 120,
    resizeMode: 'contain',
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
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.text.primary,
    fontFamily: 'Inter-Regular',
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xl,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: Colors.primary.default,
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: Colors.primary.default,
    borderColor: Colors.primary.default,
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: Colors.background.light,
  },
  termsText: {
    flex: 1,
    color: Colors.text.secondary,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  termsLink: {
    color: Colors.primary.default,
    fontFamily: 'Inter-SemiBold',
  },
  button: {
    marginTop: 8,
  },
});

interface FormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  termsAccepted: boolean;
}

export default function RegisterStep1Screen() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '+58',
    termsAccepted: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    router.push('/register/step2');
  };

  const handleTermsAccept = () => {
    setFormData(prev => ({
      ...prev,
      termsAccepted: !prev.termsAccepted
    }));
  };

  const validateForm = (): boolean => {
    return !!(
      formData.fullName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.termsAccepted
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <Header title="Registro - Paso 1" showBackButton={true} />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image 
                source={FritzCoinsLogo} 
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            
            <View style={styles.formContainer}>
              <Text style={styles.welcomeText}>Crea tu cuenta</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nombre completo</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu nombre completo"
                  placeholderTextColor={Colors.text.secondary}
                  value={formData.fullName}
                  onChangeText={(value) => handleInputChange('fullName', value)}
                />
              </View>


              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Correo electrónico</Text>
                <TextInput
                  style={styles.input}
                  placeholder="tucorreo@ejemplo.com"
                  placeholderTextColor={Colors.text.secondary}
                  value={formData.email}
                  onChangeText={(value) => handleInputChange('email', value)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Contraseña</Text>
                <View style={{ position: 'relative' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Crea una contraseña segura"
                    placeholderTextColor={Colors.text.secondary}
                    value={formData.password}
                    onChangeText={(value) => handleInputChange('password', value)}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={20} color={Colors.text.tertiary} />
                    ) : (
                      <Eye size={20} color={Colors.text.tertiary} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirmar contraseña</Text>
                <View style={{ position: 'relative' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirma tu contraseña"
                    placeholderTextColor={Colors.text.secondary}
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleInputChange('confirmPassword', value)}
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
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
                <Text style={styles.inputLabel}>Teléfono</Text>
                <TextInput
                  style={styles.input}
                  value={formData.phone}
                  onChangeText={(text) => handleInputChange('phone', text)}
                  placeholder="+58 412-1234567"
                  placeholderTextColor={Colors.text.secondary}
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.termsContainer}>
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    formData.termsAccepted && styles.checkboxChecked
                  ]}
                  onPress={handleTermsAccept}
                >
                  {formData.termsAccepted && <View style={styles.checkboxInner} />}
                </TouchableOpacity>
                <Text style={styles.termsText}>
                  Acepto los{' '}
                  <Text style={styles.termsLink} onPress={() => {}}>
                    términos y condiciones
                  </Text>
                </Text>
              </View>

              <Button
                title="Continuar"
                onPress={handleNext}
                variant="primary"
                size="large"
                fullWidth={true}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}