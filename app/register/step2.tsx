import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { registerStyles } from '../styles/registerStyles';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';
import Header from '../../components/Header';

// Interfaces
interface FormState {
  state: string;
  municipality: string;
  supervisor: string;
  salesZone: string;
  fritzSeller: string;
  address: string;
  position: string;
}

interface Municipality {
  label: string;
  value: string;
}

interface Supervisor {
  label: string;
  value: string;
}

interface SalesZone {
  label: string;
  value: string;
}

interface FritzSeller {
  name: string;
  code: string;
}

// Datos de estados y municipios de Venezuela
const states = [
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
  Carabobo: [
    { label: 'Valencia', value: 'Valencia' },
    { label: 'Puerto Cabello', value: 'Puerto Cabello' },
    { label: 'Guacara', value: 'Guacara' }
  ],
  Zulia: [
    { label: 'Maracaibo', value: 'Maracaibo' },
    { label: 'San Francisco', value: 'San Francisco' },
    { label: 'Cabimas', value: 'Cabimas' }
  ]
};

const supervisors: { [key: string]: Supervisor[] } = {
  Carabobo: [
    { label: 'Juan Pérez', value: 'JP001' },
    { label: 'María García', value: 'MG002' }
  ],
  Zulia: [
    { label: 'Carlos López', value: 'CL003' },
    { label: 'Ana Sánchez', value: 'AS004' }
  ]
};

const salesZones: { [key: string]: SalesZone[] } = {
  Carabobo: [
    { label: 'Zona Norte', value: 'ZN001' },
    { label: 'Zona Sur', value: 'ZS002' }
  ],
  Zulia: [
    { label: 'Zona Occidental', value: 'ZO003' },
    { label: 'Zona Oriental', value: 'ZO004' }
  ]
};

const fritzSellersData: { [key: string]: FritzSeller[] } = {
  ZN001: [
    { name: 'Juan García', code: 'FG001' },
    { name: 'Ana Martínez', code: 'FM002' }
  ],
  ZS002: [
    { name: 'Carlos Sánchez', code: 'FS003' },
    { name: 'María Díaz', code: 'FD004' }
  ],
  ZO003: [
    { name: 'Pedro Rodríguez', code: 'FR005' },
    { name: 'Sofía Díaz', code: 'FZ006' }
  ],
  ZO004: [
    { name: 'Luisa Fernández', code: 'FF007' },
    { name: 'Javier González', code: 'FG008' }
  ]
};

// Funciones auxiliares
const getMunicipalities = (state: string): Municipality[] => municipalities[state] || [];
const getSupervisors = (state: string): Supervisor[] => supervisors[state] || [];
const getSalesZones = (state: string): SalesZone[] => salesZones[state] || [];
const getFritzSellers = (salesZone: string): FritzSeller[] => fritzSellersData[salesZone] || [];



 

export default function RegisterStep2Screen() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>('');
  const [selectedSupervisor, setSelectedSupervisor] = useState<string>('');
  const [selectedSalesZone, setSelectedSalesZone] = useState<string>('');
  const [formData, setFormData] = useState<FormState>({
    state: '',
    municipality: '',
    supervisor: '',
    salesZone: '',
    fritzSeller: '',
    address: '',
    position: ''
  });

  // Funciones de manejo de eventos
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedMunicipality('');
    setSelectedSupervisor('');
    setSelectedSalesZone('');
    setFormData(prev => ({
      ...prev,
      state,
      municipality: '',
      supervisor: '',
      salesZone: '',
      fritzSeller: ''
    }));
  };

  const handleMunicipalityChange = (municipality: string) => {
    setSelectedMunicipality(municipality);
    setFormData(prev => ({
      ...prev,
      municipality
    }));
  };

  const handleSupervisorChange = (supervisor: string) => {
    setSelectedSupervisor(supervisor);
    setFormData(prev => ({
      ...prev,
      supervisor
    }));
  };

  const handleSalesZoneChange = (zone: string) => {
    setSelectedSalesZone(zone);
    setFormData(prev => ({
      ...prev,
      salesZone: zone
    }));
  };

  const handleFritzSellerChange = (seller: string) => {
    setFormData(prev => ({
      ...prev,
      fritzSeller: seller
    }));
  };

  const handleAddressChange = (text: string) => {
    setFormData(prev => ({
      ...prev,
      address: text
    }));
  };

  const handlePositionChange = (text: string) => {
    setFormData(prev => ({
      ...prev,
      position: text
    }));
  };

  // Función para manejar el registro
  const handleRegister = async () => {
    try {
      console.log('Formulario:', formData);
      router.replace('/register/success');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={registerStyles.container}>
      <ScrollView style={registerStyles.scrollView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={registerStyles.formContainer}
        >
          <Header title="Registro" />
          
          <View style={registerStyles.inputContainer}>
            <Text style={registerStyles.sectionTitle}>Información Geográfica</Text>
            
            <Picker
              selectedValue={selectedState}
              onValueChange={handleStateChange}
              style={registerStyles.picker}
            >
              {states.map((state) => (
                <Picker.Item key={state.value} label={state.label} value={state.value} />
              ))}
            </Picker>

            <Picker
              selectedValue={selectedMunicipality}
              onValueChange={handleMunicipalityChange}
              style={registerStyles.picker}
            >
              {getMunicipalities(selectedState).map((municipality) => (
                <Picker.Item key={municipality.value} label={municipality.label} value={municipality.value} />
              ))}
            </Picker>
          </View>

          <View style={registerStyles.inputContainer}>
            <Text style={registerStyles.sectionTitle}>Información Laboral</Text>
            
            <Picker
              selectedValue={selectedSupervisor}
              onValueChange={handleSupervisorChange}
              style={registerStyles.picker}
            >
              {getSupervisors(selectedState).map((supervisor) => (
                <Picker.Item key={supervisor.value} label={supervisor.label} value={supervisor.value} />
              ))}
            </Picker>

            <Picker
              selectedValue={selectedSalesZone}
              onValueChange={handleSalesZoneChange}
              style={registerStyles.picker}
            >
              {getSalesZones(selectedState).map((zone) => (
                <Picker.Item key={zone.value} label={zone.label} value={zone.value} />
              ))}
            </Picker>

            <Picker
              selectedValue={formData.fritzSeller}
              onValueChange={handleFritzSellerChange}
              style={registerStyles.picker}
            >
              {getFritzSellers(selectedSalesZone).map((seller) => (
                <Picker.Item key={seller.code} label={seller.name} value={seller.code} />
              ))}
            </Picker>
          </View>

          <View style={registerStyles.inputContainer}>
            <Text style={registerStyles.sectionTitle}>Información Adicional</Text>
            
            <TextInput
              style={registerStyles.input}
              placeholder="Dirección"
              value={formData.address}
              onChangeText={handleAddressChange}
            />

            <TextInput
              style={registerStyles.input}
              placeholder="Posición"
              value={formData.position}
              onChangeText={handlePositionChange}
            />
          </View>

          <Button
            title="Registrar"
            onPress={handleRegister}
            style={registerStyles.button}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
