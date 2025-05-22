import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const BenefitsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Beneficios" showBackButton={true} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>🎁 Beneficios del programa FritzCoins</Text>
            <Text style={styles.description}>
              A medida que acumulas FritzCoins, accedes a niveles con mejores beneficios. 
              Cada compra y acción suma, y mientras más alto tu nivel, mayores tus recompensas. 
              Desde FritzCoins extra hasta premios exclusivos y sorpresas por tu cumpleaños, 
              tu fidelidad tiene valor real.
            </Text>
          </View>

          <View style={[styles.levelCard, styles.goldCard]}>
            <View style={styles.levelHeader}>
              <Text style={styles.levelEmoji}>🥇</Text>
              <Text style={styles.levelTitle}>Nivel Oro</Text>
            </View>
            <Text style={styles.levelSubtitle}>Tu lealtad merece lo mejor.</Text>
            <View style={styles.benefitsList}>
              <Text style={styles.benefitItem}>• Tasa superior: 2 FritzCoins por $1</Text>
              <Text style={styles.benefitItem}>• Acceso prioritario a productos exclusivos y ediciones limitadas</Text>
              <Text style={styles.benefitItem}>• FritzCoins válidos por 12 meses</Text>
              <Text style={styles.benefitItem}>• Bonus de cumpleaños: 1000 FritzCoins</Text>
              <Text style={styles.benefitItem}>• Invitaciones a eventos y promociones especiales</Text>
            </View>
          </View>

          <View style={[styles.levelCard, styles.silverCard]}>
            <View style={styles.levelHeader}>
              <Text style={styles.levelEmoji}>🥈</Text>
              <Text style={styles.levelTitle}>Nivel Plata</Text>
            </View>
            <Text style={styles.levelSubtitle}>Para quienes ya eligieron Fritz más de una vez.</Text>
            <View style={styles.benefitsList}>
              <Text style={styles.benefitItem}>• Tasa mejorada: 1.5 FritzCoins por $1</Text>
              <Text style={styles.benefitItem}>• Acceso a premios premium</Text>
              <Text style={styles.benefitItem}>• FritzCoins válidos por 9 meses</Text>
              <Text style={styles.benefitItem}>• Bonus de cumpleaños: 500 FritzCoins</Text>
            </View>
          </View>

          <View style={[styles.levelCard, styles.bronzeCard]}>
            <View style={styles.levelHeader}>
              <Text style={styles.levelEmoji}>🥉</Text>
              <Text style={styles.levelTitle}>Nivel Bronce</Text>
            </View>
            <Text style={styles.levelSubtitle}>Empieza a ganar desde tu primera compra.</Text>
            <View style={styles.benefitsList}>
              <Text style={styles.benefitItem}>• Tasa base: 1 FritzCoin por cada $1</Text>
              <Text style={styles.benefitItem}>• Acceso a catálogo de recompensas estándar</Text>
              <Text style={styles.benefitItem}>• FritzCoins válidos por 6 meses</Text>
            </View>
          </View>

          <View style={styles.noteContainer}>
            <Text style={styles.noteText}>
              * Los beneficios están sujetos a cambios. Consulta los términos y condiciones completos en nuestra página web.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: Layout.spacing.l,
    paddingBottom: Layout.spacing.xxl,
  },
  section: {
    marginBottom: Layout.spacing.xl,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.m,
    lineHeight: 28,
  },
  description: {
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 22,
    marginBottom: Layout.spacing.xl,
  },
  levelCard: {
    borderRadius: 12,
    padding: Layout.spacing.l,
    marginBottom: Layout.spacing.l,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  goldCard: {
    backgroundColor: '#FFF8E1',
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  silverCard: {
    backgroundColor: '#F5F5F5',
    borderLeftWidth: 4,
    borderLeftColor: '#9E9E9E',
  },
  bronzeCard: {
    backgroundColor: '#FFF3E0',
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  levelEmoji: {
    fontSize: 24,
    marginRight: Layout.spacing.s,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  levelSubtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: Layout.spacing.m,
    fontStyle: 'italic',
  },
  benefitsList: {
    marginLeft: Layout.spacing.s,
  },
  benefitItem: {
    fontSize: 15,
    color: Colors.text.primary,
    marginBottom: Layout.spacing.s,
    lineHeight: 22,
  },
  noteContainer: {
    marginTop: Layout.spacing.xl,
    padding: Layout.spacing.m,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  noteText: {
    fontSize: 12,
    color: Colors.text.secondary,
    fontStyle: 'italic',
    lineHeight: 16,
  },
});

export default BenefitsScreen;
