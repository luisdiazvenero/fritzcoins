import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
}: ButtonProps) {
  const buttonStyles = StyleSheet.flatten([
    styles.button,
    styles[`${variant}Button` as keyof typeof styles] as ViewStyle,
    styles[`${size}Button` as keyof typeof styles] as ViewStyle,
    fullWidth ? styles.fullWidth : {},
    disabled ? styles.disabledButton : {},
    style,
  ]);

  const textStyles = StyleSheet.flatten([
    styles.text as TextStyle,
    styles[`${variant}Text` as keyof typeof styles] as TextStyle,
    styles[`${size}Text` as keyof typeof styles] as TextStyle,
    disabled ? styles.disabledText : {},
    textStyle,
  ]);

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
      accessibilityLabel={title}
      accessibilityState={{ disabled: disabled || isLoading }}
      accessibilityRole="button"
    >
      {isLoading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'primary' ? Colors.secondary.default : Colors.primary.default} 
        />
      ) : (
        <>
          {leftIcon}
          <Text style={textStyles}>{title}</Text>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999, // Fully rounded
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  primaryButton: {
    backgroundColor: Colors.primary.default,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary.dark,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary.default,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  smallButton: {
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.l,
    minHeight: 32,
  },
  mediumButton: {
    paddingVertical: Layout.spacing.s,
    paddingHorizontal: Layout.spacing.xl,
    minHeight: 44,
  },
  largeButton: {
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.xxl,
    minHeight: 56,
  },
  fullWidth: {
    width: '100%',
  },
  disabledButton: {
    backgroundColor: Colors.text.tertiary,
    borderColor: Colors.text.tertiary,
    opacity: 0.7,
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
  primaryText: {
    color: Colors.secondary.default,
  },
  secondaryText: {
    color: Colors.text.primary,
  },
  outlineText: {
    color: Colors.primary.default,
  },
  ghostText: {
    color: Colors.primary.default,
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
  disabledText: {
    color: Colors.background.light,
  },
});