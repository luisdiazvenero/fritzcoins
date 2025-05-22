import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { User, Settings, Bell, CircleHelp as HelpCircle, Lock, Factory, Handshake, LogOut, Award, ChevronRight } from 'lucide-react-native';
import Header from '../../components/Header';
import UserLevelBadge from '../../components/UserLevelBadge';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { userData, levelBenefits } from '../../utils/mockData';

export default function ProfileScreen() {
  const renderUserSection = () => {
    return (
      <View style={styles.userSection}>
        <View style={styles.avatarContainer}>
          <User size={32} color={Colors.secondary.default} />
        </View>
        
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.name}</Text>
          <View style={styles.userMetaContainer}>
            <UserLevelBadge level={userData.level as 'Bronce' | 'Plata' | 'Oro'} size="small" />
            <Text style={styles.userJoinDate}>Miembro desde {userData.joinDate}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderLevelBenefits = () => {
    const benefits = levelBenefits[userData.level as keyof typeof levelBenefits] || [];
    
    return (
      <View style={styles.levelBenefitsContainer}>
        <View style={styles.levelHeaderContainer}>
          <Award size={20} color={Colors.primary.default} />
          <Text style={styles.levelBenefitsTitle}>Beneficios Nivel {userData.level}</Text>
        </View>
        
        {benefits.map((benefit, index) => (
          <View key={index} style={styles.benefitItem}>
            <View style={styles.benefitDot} />
            <Text style={styles.benefitText}>{benefit}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderMenuItem = (icon: React.ReactNode, title: string, onPress: () => void, rightElement?: React.ReactNode) => {
    return (
      <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <View style={styles.menuIconContainer}>
          {icon}
        </View>
        <Text style={styles.menuItemText}>{title}</Text>
        <View style={styles.menuRightElement}>
          {rightElement || <ChevronRight size={20} color={Colors.text.tertiary} />}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mi Perfil" showBackButton={false} />
      
      <ScrollView style={styles.scrollContainer}>
        {renderUserSection()}
        
        {renderLevelBenefits()}
        
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Cuenta</Text>
          {renderMenuItem(
            <User size={20} color={Colors.primary.default} />,
            'Información Personal',
            () => {}
          )}
          {renderMenuItem(
            <Factory size={20} color={Colors.primary.default} />,
            'Información de Negocio',
            () => {}
          )}
          {renderMenuItem(
            <Lock size={20} color={Colors.primary.default} />,
            'Seguridad',
            () => {}
          )}
        </View>
        
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Preferencias</Text>
          {renderMenuItem(
            <Bell size={20} color={Colors.primary.default} />,
            'Notificaciones',
            () => {},
            <Switch 
              value={true} 
              onValueChange={() => {}} 
              trackColor={{ false: Colors.text.tertiary, true: Colors.primary.light }}
              thumbColor={Colors.secondary.default}
            />
          )}
          {renderMenuItem(
            <Handshake size={20} color={Colors.primary.default} />,
            'Vendedor Asignado',
            () => {}
          )}
        </View>
        
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Soporte</Text>
          {renderMenuItem(
            <HelpCircle size={20} color={Colors.primary.default} />,
            'Ayuda y Preguntas Frecuentes',
            () => {}
          )}
          {renderMenuItem(
            <Settings size={20} color={Colors.primary.default} />,
            'Configuración de la App',
            () => {}
          )}
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.error.default} />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>MilCoins v1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
  },
  scrollContainer: {
    flex: 1,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Layout.spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: Layout.borderRadius.circle,
    backgroundColor: Colors.primary.default,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 4,
    fontFamily: 'Inter-SemiBold',
  },
  userMetaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userJoinDate: {
    fontSize: 12,
    color: Colors.text.tertiary,
    marginLeft: Layout.spacing.s,
    fontFamily: 'Inter-Regular',
  },
  editButton: {
    padding: Layout.spacing.s,
  },
  editButtonText: {
    fontSize: 14,
    color: Colors.primary.default,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  levelBenefitsContainer: {
    padding: Layout.spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  levelHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  levelBenefitsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginLeft: Layout.spacing.s,
    fontFamily: 'Inter-SemiBold',
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Layout.spacing.s,
  },
  benefitDot: {
    width: 6,
    height: 6,
    borderRadius: Layout.borderRadius.circle,
    backgroundColor: Colors.primary.default,
    marginTop: 6,
    marginRight: Layout.spacing.s,
  },
  benefitText: {
    fontSize: 14,
    color: Colors.text.secondary,
    flex: 1,
    fontFamily: 'Inter-Regular',
  },
  menuSection: {
    paddingVertical: Layout.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  menuSectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text.secondary,
    paddingHorizontal: Layout.spacing.l,
    marginBottom: Layout.spacing.s,
    fontFamily: 'Inter-SemiBold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.l,
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text.primary,
    fontFamily: 'Inter-Regular',
  },
  menuRightElement: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Layout.spacing.l,
    marginTop: Layout.spacing.l,
  },
  logoutText: {
    fontSize: 16,
    color: Colors.error.default,
    fontWeight: '500',
    marginLeft: Layout.spacing.s,
    fontFamily: 'Inter-Medium',
  },
  versionText: {
    fontSize: 12,
    color: Colors.text.tertiary,
    textAlign: 'center',
    marginVertical: Layout.spacing.l,
    fontFamily: 'Inter-Regular',
  },
});