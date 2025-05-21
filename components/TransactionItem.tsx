import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ArrowUpRight, ArrowDownLeft, ShoppingCart, Tag } from 'lucide-react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

type TransactionType = 'earned' | 'redeemed' | 'transfer' | 'received';

type TransactionItemProps = {
  type: TransactionType;
  amount: number;
  date: string;
  description: string;
  store?: string;
  recipient?: string;
  sender?: string;
};

export default function TransactionItem({
  type,
  amount,
  date,
  description,
  store,
  recipient,
  sender,
}: TransactionItemProps) {
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    month: 'short',
    day: 'numeric',
  });
  
  const formattedTime = new Date(date).toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const getTypeColor = () => {
    switch (type) {
      case 'earned':
      case 'received':
        return Colors.success.default;
      case 'redeemed':
      case 'transfer':
        return Colors.primary.default;
      default:
        return Colors.text.primary;
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'earned':
        return <ShoppingCart size={20} color={Colors.success.default} />;
      case 'redeemed':
        return <Tag size={20} color={Colors.primary.default} />;
      case 'transfer':
        return <ArrowUpRight size={20} color={Colors.primary.default} />;
      case 'received':
        return <ArrowDownLeft size={20} color={Colors.success.default} />;
      default:
        return null;
    }
  };

  const getTypePrefix = () => {
    switch (type) {
      case 'earned':
      case 'received':
        return '+';
      case 'redeemed':
      case 'transfer':
        return '-';
      default:
        return '';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'earned':
        return store || 'FritzCoins Ganados';
      case 'redeemed':
        return 'Puntos Convertidos';
      case 'transfer':
        return `Transferencia a ${recipient}`;
      case 'received':
        return `Recibido de ${sender}`;
      default:
        return 'Transacción';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {getTypeIcon()}
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{getTitle()}</Text>
          <Text style={[styles.amount, { color: getTypeColor() }]}>
            {getTypePrefix()}{amount}
          </Text>
        </View>
        
        <View style={styles.details}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{formattedDate} • {formattedTime}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: Layout.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.secondary.dark,
    borderRadius: Layout.borderRadius.circle,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text.primary,
    fontFamily: 'Inter-Medium',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: Colors.text.secondary,
    flex: 1,
    fontFamily: 'Inter-Regular',
  },
  date: {
    fontSize: 12,
    color: Colors.text.tertiary,
    marginLeft: Layout.spacing.s,
    fontFamily: 'Inter-Regular',
  },
});