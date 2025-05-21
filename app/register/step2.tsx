import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { states, municipalities, supervisors, salesZones } from '../../utils/locationData';

export default function RegisterStep2Screen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    state: '',
    municipality: '',
    supervisor: '',
    salesZone: '',
    sellerCode: '',
    address: '',
  });

  const handleRegister = () => {
    // Here you would typically submit the form data
    router.push('/(tabs)/wallet');
  };

  const availableMunicipalities = formData.state ? municipalities[formData.state] || [] : [];

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
              <Text style={styles.stepText}>Paso 2 de 2</Text>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Estado</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.state}
                    onValueChange={(value) => setFormData({ ...formData, state: value, municipality: '' })}
                    style={styles.picker}
                  >
                    <Picker.Item label="Selecciona un estado" value="" />
                    {states.map((state) => (
                      <Picker.Item key={state} label={state} value={state} />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Municipio</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.municipality}
                    onValueChange={(value) => setFormData({ ...formData, municipality: value })}
                    style={styles.picker}
                    enabled={!!formData.state}
                  >
                    <Picker.Item label="Selecciona un municipio" value="" />
                    {availableMunicipalities.map((municipality) => (
                      <Picker.Item key={municipality} label={municipality} value={municipality} />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Supervisor</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.supervisor}
                    onValueChange={(value) => setFormData({ ...formData, supervisor: value })}
                    style={styles.picker}
                  >
                    <Picker.Item label="Selecciona un supervisor" value="" />
                    {supervisors.map((supervisor) => (
                      <Picker.Item key={supervisor} label={supervisor} value={supervisor} />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Zona de Venta</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.salesZone}
                    onValueChange={(value) => setFormData({ ...formData, salesZone: value })}
                    style={styles.picker}
                  >
                    <Picker.Item label="Selecciona una zona" value="" />
                    {salesZones.map((zone) => (
                      <Picker.Item key={zone} label={zone} value={zone} />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Código de Vendedor</Text>
                <TextInput
                  style={styles.input}
                  value={formData.sellerCode}
                  onChangeText={(text) => setFormData({ ...formData, sellerCode: text })}
                  placeholder="Ingresa tu código de vendedor"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Dirección</Text>
                <TextInput
                  style={[styles.input, styles.addressInput]}
                  value={formData.address}
                  onChangeText={(text) => setFormData({ ...formData, address: text })}
                  placeholder="Ingresa tu dirección completa"
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />
              </View>

              <Button
                title="Completar Registro"
                onPress={handleRegister}
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: Layout.borderRadius.medium,
    backgroundColor: Colors.background.light,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
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
  addressInput: {
    height: 100,
    paddingTop: Layout.spacing.m,
    paddingBottom: Layout.spacing.m,
  },
  button: {
    marginTop: Layout.spacing.xl,
  },
});