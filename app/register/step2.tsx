import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  SafeAreaView, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Image } from 'react-native';
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
    marginTop: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: Colors.text.primary,
    backgroundColor: Colors.background.light,
    marginBottom: 16,
  },
  inputText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  placeholderText: {
    color: '#999999', // Un tono más claro para los placeholders
  },
  pickerContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: 12,
    backgroundColor: Colors.background.light,
    paddingHorizontal: 16,
    color: Colors.text.primary,
    fontFamily: 'Inter-Regular',
  },
  pickerText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  pickerPlaceholder: {
    color: '#999999',
  },
  pickerDropdownIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: -6
  },
  disabledInput: {
    backgroundColor: '#f4f4f4', // Color de fondo específico solicitado
    justifyContent: 'center',
    borderColor: Colors.divider,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  disabledText: {
    color: Colors.text.primary,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 32,
  },
  button: {
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.primary.default,
  },
  buttonText: {
    color: Colors.text.inverse,
    fontSize: 16,
    fontWeight: '600',
  },
});

// Interfaces
interface FormState {
  businessName: string;
  businessPosition: string;
  businessAddress: string;
  state: string;
  municipality: string;
  fritzCode: string;
  fritzSeller: string;
}

interface Municipality {
  label: string;
  value: string;
}

interface FritzSeller {
  name: string;
  code: string;
}

// Datos de estados y municipios de Venezuela
const states = [
  { label: 'Selecciona Estado', value: '' },
  { label: 'Amazonas', value: 'Amazonas' },
  { label: 'Anzoátegui', value: 'Anzoátegui' },
  { label: 'Apure', value: 'Apure' },
  { label: 'Aragua', value: 'Aragua' },
  { label: 'Barinas', value: 'Barinas' },
  { label: 'Bolívar', value: 'Bolívar' },
  { label: 'Carabobo', value: 'Carabobo' },
  { label: 'Cojedes', value: 'Cojedes' },
  { label: 'Delta Amacuro', value: 'Delta Amacuro' },
  { label: 'Distrito Capital', value: 'Distrito Capital' },
  { label: 'Falcón', value: 'Falcón' },
  { label: 'Guárico', value: 'Guárico' },
  { label: 'Lara', value: 'Lara' },
  { label: 'Mérida', value: 'Mérida' },
  { label: 'Miranda', value: 'Miranda' },
  { label: 'Monagas', value: 'Monagas' },
  { label: 'Nueva Esparta', value: 'Nueva Esparta' },
  { label: 'Portuguesa', value: 'Portuguesa' },
  { label: 'Sucre', value: 'Sucre' },
  { label: 'Táchira', value: 'Táchira' },
  { label: 'Trujillo', value: 'Trujillo' },
  { label: 'Vargas', value: 'Vargas' },
  { label: 'Yaracuy', value: 'Yaracuy' },
  { label: 'Zulia', value: 'Zulia' }
];

// Datos de apoyo
const municipalities: { [key: string]: Municipality[] } = {
  'Distrito Capital': [
    { label: 'Selecciona Municipio', value: '' },
    { label: 'Libertador', value: 'Libertador' },
    { label: 'El Hatillo', value: 'El Hatillo' },
    { label: 'Baruta', value: 'Baruta' },
    { label: 'Chacao', value: 'Chacao' }
  ],
  'Miranda': [
    { label: 'Selecciona Municipio', value: '' },
    { label: 'Baruta', value: 'Baruta' },
    { label: 'Chacao', value: 'Chacao' },
    { label: 'El Hatillo', value: 'El Hatillo' },
    { label: 'Sucre', value: 'Sucre' },
    { label: 'Plaza', value: 'Plaza' },
    { label: 'Zamora', value: 'Zamora' },
    { label: 'Acevedo', value: 'Acevedo' },
    { label: 'Andrés Bello', value: 'Andrés Bello' },
    { label: 'Buroz', value: 'Buroz' },
    { label: 'Independencia', value: 'Independencia' },
    { label: 'Lander', value: 'Lander' },
    { label: 'Páez', value: 'Páez' },
    { label: 'Paz Castillo', value: 'Paz Castillo' },
    { label: 'Pedro Gual', value: 'Pedro Gual' },
    { label: 'Urdaneta', value: 'Urdaneta' }
  ],
  'Carabobo': [
    { label: 'Selecciona Municipio', value: '' },
    { label: 'Valencia', value: 'Valencia' },
    { label: 'Puerto Cabello', value: 'Puerto Cabello' },
    { label: 'Guacara', value: 'Guacara' },
    { label: 'San Diego', value: 'San Diego' },
    { label: 'Los Guayos', value: 'Los Guayos' },
    { label: 'Naguanagua', value: 'Naguanagua' },
    { label: 'San Joaquín', value: 'San Joaquín' },
    { label: 'Mariara', value: 'Mariara' },
    { label: 'Guigue', value: 'Guigue' },
    { label: 'Tocuyito', value: 'Tocuyito' },
    { label: 'Bejuma', value: 'Bejuma' },
    { label: 'Montalbán', value: 'Montalbán' }
  ],
  'Zulia': [
    { label: 'Selecciona Municipio', value: '' },
    { label: 'Maracaibo', value: 'Maracaibo' },
    { label: 'San Francisco', value: 'San Francisco' },
    { label: 'Cabimas', value: 'Cabimas' },
    { label: 'Ciudad Ojeda', value: 'Ciudad Ojeda' },
    { label: 'Santa Rita', value: 'Santa Rita' },
    { label: 'La Concepción', value: 'La Concepción' },
    { label: 'Los Puertos de Altagracia', value: 'Los Puertos de Altagracia' },
    { label: 'Villa del Rosario', value: 'Villa del Rosario' },
    { label: 'La Cañada de Urdaneta', value: 'La Cañada de Urdaneta' },
    { label: 'Lagunillas', value: 'Lagunillas' },
    { label: 'Machiques', value: 'Machiques' },
    { label: 'Rosario de Perijá', value: 'Rosario de Perijá' }
  ]
};

// Vendedores Fritz
const fritzSellers: FritzSeller[] = [
  { name: 'Vendedor Asignado Fritz', code: '' },
  { name: 'Carlos Andrés Pérez', code: 'CAP001' },
  { name: 'María Gabriela Rojas', code: 'MGR002' },
  { name: 'José Luis Mendoza', code: 'JLM003' },
  { name: 'Ana Karina Suárez', code: 'AKS004' },
  { name: 'Luis Fernando Torres', code: 'LFT005' },
  { name: 'Patricia del Valle', code: 'PDV006' },
  { name: 'Roberto Carlos Silva', code: 'RCS007' },
  { name: 'Daniela Carolina Márquez', code: 'DCM008' }
];

// Código de cliente Fritz (fijo)
const FRITZ_CLIENT_CODE = 'FRCL0124';

// Función auxiliar para obtener municipios (sin depender del estado)
const getAllMunicipalities = (): Municipality[] => {
  // Obtener todos los municipios de todos los estados
  const allMunicipalities: Municipality[] = [];
  Object.values(municipalities).forEach(stateMunicipalities => {
    // Filtrar el placeholder de selección de municipio
    const validMunicipalities = stateMunicipalities.filter(m => m.value !== '');
    allMunicipalities.push(...validMunicipalities);
  });
  
  // Limitar a 12 municipios (más el placeholder)
  return [
    { label: 'Selecciona un municipio', value: '' },
    ...allMunicipalities.slice(0, 12)
  ];
};



 

export default function RegisterStep2Screen() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string>('');
  const [formData, setFormData] = useState<FormState>({
    businessName: '',
    businessPosition: '',
    businessAddress: '',
    state: '',
    municipality: '',
    fritzCode: FRITZ_CLIENT_CODE,
    fritzSeller: ''
  });

  // Funciones de manejo de eventos
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setFormData(prev => ({
      ...prev,
      state,
      municipality: ''
    }));
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Función para manejar el registro
  const handleRegister = () => {
    // Navegar a la pantalla de Mi Billetera
    router.push('/wallet');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <Header title="Registro - Paso 2" showBackButton={true} />
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
              <Text style={styles.welcomeText}>Completa tu información</Text>
          
              {/* Bloque 1: Sobre el Negocio */}
              <View style={styles.inputContainer}>
                <Text style={styles.sectionTitle}>Sobre el Negocio</Text>
                
                <TextInput
                  style={[styles.input, styles.inputText]}
                  placeholder="Ingresa el nombre de tu Negocio"
                  value={formData.businessName}
                  onChangeText={(text) => handleInputChange('businessName', text)}
                  placeholderTextColor="#999999"
                />

                <TextInput
                  style={[styles.input, styles.inputText]}
                  placeholder="Ingresa tu cargo en el Negocio"
                  value={formData.businessPosition}
                  onChangeText={(text) => handleInputChange('businessPosition', text)}
                  placeholderTextColor="#999999"
                />
              </View>

              {/* Bloque 2: Ubicación */}
              <View style={styles.inputContainer}>
                <Text style={styles.sectionTitle}>Ubicación</Text>
                
                <TextInput
                  style={[styles.input, styles.inputText]}
                  placeholder="Ingresa la dirección de tu Negocio"
                  value={formData.businessAddress}
                  onChangeText={(text) => handleInputChange('businessAddress', text)}
                  placeholderTextColor="#999999"
                />
                
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.state}
                    onValueChange={(value) => handleInputChange('state', value)}
                    style={styles.picker}
                    dropdownIconColor={Colors.text.primary}
                  >
                    {states.map((state) => (
                      <Picker.Item 
                        key={state.value} 
                        label={state.label} 
                        value={state.value} 
                        style={!state.value ? styles.pickerPlaceholder : styles.pickerText}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.municipality}
                    onValueChange={(value) => handleInputChange('municipality', value)}
                    style={styles.picker}
                    dropdownIconColor={Colors.text.primary}
                    enabled={!!formData.state}
                  >
                    {getAllMunicipalities().map((municipality) => (
                      <Picker.Item 
                        key={municipality.value || 'default'}
                        label={municipality.label}
                        value={municipality.value}
                        style={!municipality.value ? styles.pickerPlaceholder : styles.pickerText}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              {/* Bloque 3: Fritz */}
              <View style={styles.inputContainer}>
                <Text style={styles.sectionTitle}>Fritz</Text>
                
                <View style={[styles.input, styles.disabledInput]}>
                  <Text style={[styles.disabledText, { color: Colors.text.primary }]}>
                    Código cliente Fritz: {formData.fritzCode}
                  </Text>
                </View>
                
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.fritzSeller}
                    onValueChange={(value) => handleInputChange('fritzSeller', value)}
                    style={styles.picker}
                    dropdownIconColor={Colors.text.primary}
                  >
                    <Picker.Item 
                      label="Selecciona un vendedor" 
                      value="" 
                      style={styles.pickerPlaceholder}
                    />
                    {fritzSellers.map((seller) => (
                      <Picker.Item 
                        key={seller.code} 
                        label={seller.name} 
                        value={seller.code} 
                        style={styles.pickerText}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  title="Registrarse"
                  onPress={handleRegister}
                  variant="primary"
                  size="large"
                  fullWidth={true}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
