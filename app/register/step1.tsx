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
} from 'react-native';
import { registerStyles } from '../styles/registerStyles';
import { useRouter } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  termsText: {
    color: '#666',
    fontSize: 14,
  },
  termsLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
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
    if (!validateForm()) {
      return;
    }
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
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={registerStyles.container}
    >
      <SafeAreaView style={registerStyles.container}>
        <ScrollView style={registerStyles.scrollView}>
          <Header title="Registro - Paso 1" />
          
          <View style={registerStyles.formContainer}>
            <Text style={registerStyles.sectionTitle}>Información Personal</Text>

            <View style={registerStyles.inputContainer}>
              <TextInput
                style={registerStyles.input}
                placeholder="Nombre completo"
                placeholderTextColor="#666"
                value={formData.fullName}
                onChangeText={(value) => handleInputChange('fullName', value)}
              />
            </View>

            <View style={registerStyles.inputContainer}>
              <TextInput
                style={registerStyles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#666"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={registerStyles.inputContainer}>
              <TextInput
                style={registerStyles.input}
                placeholder="Contraseña"
                placeholderTextColor="#666"
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={registerStyles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#666" />
                ) : (
                  <Eye size={20} color="#666" />
                )}
              </TouchableOpacity>
            </View>

            <View style={registerStyles.inputContainer}>
              <TextInput
                style={registerStyles.input}
                placeholder="Confirmar contraseña"
                placeholderTextColor="#666"
                value={formData.confirmPassword}
                onChangeText={(value) => handleInputChange('confirmPassword', value)}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                style={registerStyles.eyeButton}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} color="#666" />
                ) : (
                  <Eye size={20} color="#666" />
                )}
              </TouchableOpacity>
            </View>

            <View style={registerStyles.inputContainer}>
              <TextInput
                style={registerStyles.input}
                value={formData.phone}
                onChangeText={(text) => handleInputChange('phone', text)}
                placeholder="+58 XXX-XXX-XXXX"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.termsContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setFormData(prev => ({
                  ...prev,
                  termsAccepted: !prev.termsAccepted
                }))}
              >
                <View style={[
                  styles.checkbox,
                  formData.termsAccepted && styles.checkboxChecked
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
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}