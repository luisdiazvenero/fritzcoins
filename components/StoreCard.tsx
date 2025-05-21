import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MapPin, ArrowUpRight } from 'lucide-react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

type StoreCardProps = {
  name: string;
  logo: string;
  distance: string;
  address: string;
  promotion?: string;
  onPress: () => void;
};

export default function StoreCard({ 
  name, 
  logo, 
  distance, 
  address, 
  promotion, 
  onPress 
}: StoreCardProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityLabel={`${name} store, ${distance} away`}
    >
      <View style={styles.leftContent}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      
      <View style={styles.centerContent}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.locationContainer}>
          <MapPin size={14} color={Colors.text.tertiary} />
          <Text style={styles.distance}>{distance} • </Text>
          <Text style={styles.address} numberOfLines={1}>{address}</Text>
        </View>
        {promotion && (
          <View style={styles.promotionContainer}>
            <Text style={styles.promotionText}>{promotion}</Text>
          </View>
        )}
      </View>
      
      <View style={styles.rightContent}>
        <ArrowUpRight size={20} color={Colors.primary.default} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.light,
    padding: Layout.spacing.m,
    borderRadius: Layout.borderRadius.medium,
    marginBottom: Layout.spacing.m,
    ...Layout.shadow.light,
  },
  leftContent: {
    marginRight: Layout.spacing.m,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: Layout.borderRadius.circle,
  },
  centerContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  distance: {
    fontSize: 12,
    color: Colors.text.tertiary,
    marginLeft: 4,
  },
  address: {
    fontSize: 12,
    color: Colors.text.tertiary,
    flex: 1,
  },
  promotionContainer: {
    backgroundColor: Colors.success.light,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 2,
    borderRadius: Layout.borderRadius.small,
    alignSelf: 'flex-start',
  },
  promotionText: {
    fontSize: 12,
    color: Colors.success.default,
    fontWeight: '500',
  },
  rightContent: {
    marginLeft: Layout.spacing.s,
  },
});