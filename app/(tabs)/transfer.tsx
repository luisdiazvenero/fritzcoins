import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  SafeAreaView, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { User, Coins, ChevronDown, CircleArrowRight as ArrowRightCircle, Users } from 'lucide-react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TransactionItem from '../../components/TransactionItem';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { userData, transactions } from '../../utils/mockData';

export default function TransferScreen() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [showContacts, setShowContacts] = useState(false);

  const handleTransfer = () => {
    if (!amount || !recipient) {
      Alert.alert('Información Faltante', 'Por favor ingresa un monto y destinatario');
      return;
    }
    
    const numAmount = parseInt(amount, 10);
    if (isNaN(numAmount) || numAmount <= 0) {
      Alert.alert('Monto Inválido', 'Por favor ingresa un monto válido');
      return;
    }
    
    if (numAmount > userData.balance) {
      Alert.alert('Saldo Insuficiente', 'No tienes suficientes FritzCoins');
      return;
    }
    
    Alert.alert(
      'Transferencia Exitosa',
      `Has enviado ${amount} FritzCoins a ${recipient}`,
      [{ text: 'OK', onPress: () => resetForm() }]
    );
  };

  const resetForm = () => {
    setAmount('');
    setRecipient('');
  };

  const contacts = [
    { id: '1', name: 'María García', lastTransfer: 'hace 2 días' },
    { id: '2', name: 'Carlos Rodríguez', lastTransfer: 'hace 1 semana' },
    { id: '3', name: 'Lucía Martínez', lastTransfer: 'hace 2 semanas' },
  ];

  const renderContactsList = () => {
    if (!showContacts) return null;
    
    return (
      <View style={styles.contactsContainer}>
        <Text style={styles.contactsTitle}>Contactos Recientes</Text>
        {contacts.map((contact) => (
          <TouchableOpacity 
            key={contact.id} 
            style={styles.contactItem}
            onPress={() => {
              setRecipient(contact.name);
              setShowContacts(false);
            }}
          >
            <View style={styles.contactAvatar}>
              <User size={20} color={Colors.secondary.default} />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactLastTransfer}>Última transferencia: {contact.lastTransfer}</Text>
            </View>
            <ArrowRightCircle size={20} color={Colors.primary.default} />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const filterTransferTransactions = () => {
    return transactions.filter(
      (transaction) => transaction.type === 'transfer' || transaction.type === 'received'
    ).slice(0, 3);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Transferir FritzCoins" showBackButton={false} />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Saldo Disponible</Text>
            <View style={styles.balanceRow}>
              <Coins size={20} color={Colors.primary.default} />
              <Text style={styles.balanceAmount}>{userData.balance}</Text>
            </View>
          </View>
          
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Monto (FritzCoins)</Text>
              <TextInput
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
                placeholder="0"
                keyboardType="number-pad"
                placeholderTextColor={Colors.text.tertiary}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Destinatario</Text>
              <View style={styles.recipientInputContainer}>
                <TextInput
                  style={styles.recipientInput}
                  value={recipient}
                  onChangeText={setRecipient}
                  placeholder="Ingresa nombre, email o teléfono"
                  placeholderTextColor={Colors.text.tertiary}
                />
                <TouchableOpacity 
                  style={styles.contactsButton}
                  onPress={() => setShowContacts(!showContacts)}
                >
                  <Users size={20} color={Colors.primary.default} />
                  <ChevronDown size={16} color={Colors.primary.default} style={styles.chevronIcon} />
                </TouchableOpacity>
              </View>
            </View>
            
            {renderContactsList()}
            
            <Button
              title="Enviar MilCoins"
              onPress={handleTransfer}
              variant="primary"
              size="large"
              fullWidth
              style={styles.transferButton}
            />
          </View>
          
          <View style={styles.transactionsContainer}>
            <Text style={styles.sectionTitle}>Transferencias Recientes</Text>
            
            {filterTransferTransactions().map((transaction) => (
              <TransactionItem
                key={transaction.id}
                type={transaction.type as any}
                amount={transaction.amount}
                date={transaction.date}
                description={transaction.description}
                recipient={transaction.recipient}
                sender={transaction.sender}
              />
            ))}
            
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>Ver Todas las Transferencias</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: Layout.spacing.m,
  },
  balanceCard: {
    backgroundColor: Colors.card,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
    ...Layout.shadow.light,
  },
  balanceLabel: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: Layout.spacing.s,
    fontFamily: 'Inter-Regular',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text.primary,
    marginLeft: Layout.spacing.s,
    fontFamily: 'Poppins-Bold',
  },
  formContainer: {
    backgroundColor: Colors.card,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
    ...Layout.shadow.light,
  },
  inputContainer: {
    marginBottom: Layout.spacing.m,
  },
  inputLabel: {
    fontSize: 14,
    color: Colors.text.primary,
    marginBottom: Layout.spacing.s,
    fontFamily: 'Inter-Medium',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: Layout.borderRadius.medium,
    paddingHorizontal: Layout.spacing.m,
    fontSize: 16,
    backgroundColor: Colors.background.light,
    fontFamily: 'Inter-Regular',
  },
  recipientInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: Layout.borderRadius.medium,
    backgroundColor: Colors.background.light,
  },
  recipientInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: Layout.spacing.m,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  contactsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.m,
    height: '100%',
  },
  chevronIcon: {
    marginLeft: 4,
  },
  contactsContainer: {
    backgroundColor: Colors.secondary.dark,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
  },
  contactsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.s,
    fontFamily: 'Inter-Medium',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Layout.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  contactAvatar: {
    width: 36,
    height: 36,
    borderRadius: Layout.borderRadius.circle,
    backgroundColor: Colors.primary.default,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.s,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text.primary,
    fontFamily: 'Inter-Medium',
  },
  contactLastTransfer: {
    fontSize: 12,
    color: Colors.text.tertiary,
    fontFamily: 'Inter-Regular',
  },
  transferButton: {
    marginTop: Layout.spacing.s,
  },
  transactionsContainer: {
    backgroundColor: Colors.card,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
    ...Layout.shadow.light,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.m,
    fontFamily: 'Inter-SemiBold',
  },
  viewAllButton: {
    alignItems: 'center',
    paddingVertical: Layout.spacing.m,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
    marginTop: Layout.spacing.s,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.primary.default,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
});