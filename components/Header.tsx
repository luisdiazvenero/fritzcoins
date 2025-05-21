import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
  showLogo?: boolean;
};

export default function Header({ 
  title, 
  showBackButton = true, 
  rightComponent,
  showLogo = true,
}: HeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
            accessibilityLabel="Back button"
          >
            <ArrowLeft size={24} color={Colors.text.primary} />
          </TouchableOpacity>
        )}
        {showLogo && !showBackButton && (
          <Image 
            source={{ uri: 'https://fritzinternational.us/wp-content/uploads/2024/05/logo-fritz-web.png' }}
            style={styles.logo}
            resizeMode="contain"
          />
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightContainer}>
        {rightComponent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.m,
    backgroundColor: Colors.background.light,
    ...Platform.select({
      web: {
        height: 64,
      },
      default: {
        height: 56,
      },
    }),
  },
  leftContainer: {
    width: 64, // Reduced from 80 to 64 (80% of original)
    alignItems: 'flex-start',
  },
  backButton: {
    padding: Layout.spacing.xs,
  },
  logo: {
    width: 64, // Reduced from 80 to 64 (80% of original)
    height: 64, // Reduced from 80 to 64 (80% of original)
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
  },
  rightContainer: {
    width: 64, // Reduced from 80 to 64 (80% of original)
    alignItems: 'flex-end',
  },
});