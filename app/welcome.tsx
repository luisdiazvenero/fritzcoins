import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Coins, ArrowRight, ShoppingCart, Tag, ArrowUpRight, Star } from 'lucide-react-native';
import Button from '../components/Button';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function WelcomeScreen() {
  const router = useRouter();

  const featureItems = [
    {
      icon: <ShoppingCart size={24} color={Colors.primary.default} />,
      title: 'Gana FritzCoins',
      description: 'Gana FritzCoins en cada compra de productos Fritz.',
    },
    {
      icon: <Tag size={24} color={Colors.primary.default} />,
      title: 'Canjea por Descuentos',
      description: 'Usa tus FritzCoins para obtener descuentos en nuevas compras de productos Fritz.',
    },
    {
      icon: <ArrowUpRight size={24} color={Colors.primary.default} />,
      title: 'Transfiere FritzCoins',
      description: 'Envía y recibe FritzCoins entre colegas, amigos y familia.',
    },
    {
      icon: <Star size={24} color={Colors.primary.default} />,
      title: 'Sube de Nivel',
      description: 'Gana estatus y accede a promociones exclusivas, capacitaciones y servicios personalizados para tu negocio.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Coins size={40} color={Colors.secondary.default} />
            <Text style={styles.logoText}>Fritz Coins</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Bienvenido al Sistema de Puntos Fritz</Text>
          <Text style={styles.subtitle}>
            Tu nueva Billetera digital para ganar y usar tus puntos en compras de Productos Fritz
          </Text>

          <View style={styles.featuresContainer}>
            {featureItems.map((item, index) => (
              <View key={index} style={styles.featureItem}>
                <View style={styles.featureIconContainer}>
                  {item.icon}
                </View>
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureTitle}>{item.title}</Text>
                  <Text style={styles.featureDescription}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            title="Comenzar"
            onPress={() => router.push('/login')}
            variant="primary"
            size="large"
            fullWidth
            rightIcon={<ArrowRight size={20} color={Colors.secondary.default} style={{ marginLeft: 8 }} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: 220,
    width: '100%',
    backgroundColor: Colors.primary.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.secondary.default,
    marginLeft: Layout.spacing.s,
    fontFamily: 'Poppins-Bold',
  },
  content: {
    padding: Layout.spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.s,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: Layout.spacing.xl,
    fontFamily: 'Inter-Regular',
  },
  featuresContainer: {
    marginTop: Layout.spacing.l,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.l,
    alignItems: 'flex-start',
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: Layout.borderRadius.circle,
    backgroundColor: Colors.secondary.dark,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 4,
    fontFamily: 'Inter-SemiBold',
  },
  featureDescription: {
    fontSize: 14,
    color: Colors.text.secondary,
    fontFamily: 'Inter-Regular',
  },
  footer: {
    padding: Layout.spacing.xl,
    paddingTop: 0,
    marginTop: 'auto',
  },
});