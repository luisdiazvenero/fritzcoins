import React from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet, Platform } from 'react-native';
import { Wallet, ShoppingBag, ArrowRightLeft, User } from 'lucide-react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.default,
        tabBarInactiveTintColor: Colors.text.tertiary,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Billetera',
          tabBarIcon: ({ color, size }) => (
            <Wallet size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'Transferir',
          tabBarIcon: ({ color, size }) => (
            <ArrowRightLeft size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Premios',
          tabBarIcon: ({ color, size }) => (
            <ShoppingBag size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.background.light,
    borderTopColor: Colors.divider,
    height: Platform.select({ ios: 88, android: 60, default: 60 }),
    paddingBottom: Platform.select({ ios: 28, default: 0 }),
    ...Layout.shadow.light,
  },
  tabBarLabel: {
    fontSize: 10,
    fontFamily: 'Inter-Medium',
    marginBottom: 4,
  },
  tabBarIcon: {
    marginTop: 4,
  },
});