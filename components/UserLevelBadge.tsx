import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

type UserLevelBadgeProps = {
  level: 'Bronze' | 'Silver' | 'Gold';
  size?: 'small' | 'medium' | 'large';
};

export default function UserLevelBadge({ level, size = 'medium' }: UserLevelBadgeProps) {
  const getLevelColor = () => {
    switch (level) {
      case 'Bronze':
        return Colors.badge.bronze;
      case 'Silver':
        return Colors.badge.silver;
      case 'Gold':
        return Colors.badge.gold;
      default:
        return Colors.badge.bronze;
    }
  };

  return (
    <View style={[
      styles.container, 
      { backgroundColor: getLevelColor() },
      styles[`${size}Container`]
    ]}>
      <Text style={[
        styles.text,
        styles[`${size}Text`]
      ]}>
        {level}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Layout.borderRadius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallContainer: {
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 2,
  },
  mediumContainer: {
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.xs,
  },
  largeContainer: {
    paddingHorizontal: Layout.spacing.l,
    paddingVertical: Layout.spacing.s,
  },
  text: {
    color: Colors.text.inverse,
    fontWeight: '600',
  },
  smallText: {
    fontSize: 10,
  },
  mediumText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 14,
  },
});