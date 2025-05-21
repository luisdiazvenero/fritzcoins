import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Coins } from 'lucide-react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

type RewardCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  discount: string;
  originalPrice: string;
  finalPrice: string;
  onPress: () => void;
};

export default function RewardCard({
  id,
  name,
  description,
  image,
  price,
  discount,
  originalPrice,
  finalPrice,
  onPress,
}: RewardCardProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityLabel={`${name} reward for ${price} MilCoins`}
    >
      <Image source={{ uri: image }} style={styles.image} />
      
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{discount}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
        
        <View style={styles.priceContainer}>
          <View style={styles.milcoinsContainer}>
            <Coins size={16} color={Colors.primary.default} />
            <Text style={styles.price}>{price}</Text>
          </View>
          
          <View style={styles.retailPriceContainer}>
            <Text style={styles.originalPrice}>{originalPrice}</Text>
            <Text style={styles.finalPrice}>{finalPrice}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.light,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    width: '48%',
    marginBottom: Layout.spacing.m,
    ...Layout.shadow.light,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  discountBadge: {
    position: 'absolute',
    top: Layout.spacing.s,
    right: Layout.spacing.s,
    backgroundColor: Colors.primary.default,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 2,
    borderRadius: Layout.borderRadius.small,
  },
  discountText: {
    color: Colors.secondary.default,
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    padding: Layout.spacing.m,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: Colors.text.secondary,
    marginBottom: Layout.spacing.s,
    height: 32,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Layout.spacing.xs,
  },
  milcoinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary.default,
    marginLeft: 4,
  },
  retailPriceContainer: {
    alignItems: 'flex-end',
  },
  originalPrice: {
    fontSize: 12,
    color: Colors.text.tertiary,
    textDecorationLine: 'line-through',
  },
  finalPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text.primary,
  },
});