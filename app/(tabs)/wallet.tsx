import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { Coins, History, ChevronRight, TrendingUp, TrendingDown, ArrowRightLeft } from 'lucide-react-native';
import Header from '../../components/Header';
import TransactionItem from '../../components/TransactionItem';
import UserLevelBadge from '../../components/UserLevelBadge';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { userData, transactions, levelBenefits } from '../../utils/mockData';

export default function WalletScreen() {
  const router = useRouter();

  const renderLevelProgress = () => {
    return (
      <View style={styles.levelProgressContainer}>
        <View style={styles.levelProgressHeader}>
          <View style={styles.levelTitleContainer}>
            <Text style={styles.levelTitle}>Progreso de Nivel</Text>
            <UserLevelBadge level={userData.level as 'Bronce' | 'Plata' | 'Oro'} size="small" />
          </View>
          <TouchableOpacity style={styles.levelInfoButton}>
            <Text style={styles.levelInfoText}>Ver Beneficios</Text>
            <ChevronRight size={16} color={Colors.primary.default} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${userData.levelProgress}%` }]} />
        </View>
        
        <Text style={styles.progressText}>
          {userData.pointsToNextLevel} FritzCoins para el siguiente nivel
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Mi Billetera" 
        showBackButton={false}
        rightComponent={
          <TouchableOpacity onPress={() => {/* Navigate to transaction history */}}>
            <History size={24} color={Colors.text.primary} />
          </TouchableOpacity>
        }
      />

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Saldo Actual</Text>
          <View style={styles.balanceRow}>
            <Coins size={32} color={Colors.primary.default} />
            <Text style={styles.balanceAmount}>{userData.balance}</Text>
          </View>
          <Text style={styles.balanceSubtext}>FritzCoins</Text>
          
          <View style={styles.buttonsContainer}>
            <Button
              title="Transferir"
              onPress={() => router.push('/transfer')}
              variant="outline"
              size="medium"
              style={styles.balanceButton}
              leftIcon={
                <View style={styles.buttonIconContainer}>
                  <ArrowRightLeft size={20} color={Colors.primary.default} />
                </View>
              }
            />
            <View style={styles.buttonSpacer} />
            <Button
              title="Canjear"
              onPress={() => router.push('/rewards')}
              variant="primary"
              size="medium"
              style={styles.balanceButton}
            />
          </View>
        </View>

        {renderLevelProgress()}

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>37</Text>
              <TrendingUp size={16} color={Colors.success.default} style={styles.statIcon} />
            </View>
            <Text style={styles.statLabel}>Transacciones</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>12</Text>
              <TrendingDown size={16} color={Colors.error.default} style={styles.statIcon} />
            </View>
            <Text style={styles.statLabel}>Premios Usados</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>15%</Text>
              <TrendingUp size={16} color={Colors.success.default} style={styles.statIcon} />
            </View>
            <Text style={styles.statLabel}>Este Mes</Text>
          </View>
        </View>

        <View style={styles.transactionsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Transacciones Recientes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver Todas</Text>
            </TouchableOpacity>
          </View>

          {transactions.slice(0, 4).map((transaction) => (
            <TransactionItem
              key={transaction.id}
              type={transaction.type as any}
              amount={transaction.amount}
              date={transaction.date}
              description={transaction.description}
              store={transaction.store}
              recipient={transaction.recipient}
              sender={transaction.sender}
            />
          ))}
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
    flex: 1,
  },
  balanceCard: {
    backgroundColor: Colors.card,
    borderRadius: Layout.borderRadius.large,
    padding: Layout.spacing.xl,
    margin: Layout.spacing.m,
    alignItems: 'center',
    ...Layout.shadow.medium,
  },
  balanceLabel: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: Layout.spacing.s,
    fontFamily: 'Inter-Regular',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  balanceAmount: {
    fontSize: 48,
    fontWeight: '700',
    color: Colors.text.primary,
    marginLeft: Layout.spacing.s,
    fontFamily: 'Poppins-Bold',
  },
  balanceSubtext: {
    fontSize: 14,
    color: Colors.text.tertiary,
    marginBottom: Layout.spacing.l,
    fontFamily: 'Inter-Regular',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  balanceButton: {
    flex: 1,
  },
  buttonSpacer: {
    width: Layout.spacing.m,
  },
  buttonIconContainer: {
    marginRight: Layout.spacing.s,
  },
  levelProgressContainer: {
    backgroundColor: Colors.card,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.l,
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
    ...Layout.shadow.light,
  },
  levelProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  levelTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginRight: Layout.spacing.s,
    fontFamily: 'Inter-SemiBold',
  },
  levelInfoButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelInfoText: {
    fontSize: 14,
    color: Colors.primary.default,
    fontFamily: 'Inter-Medium',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: Colors.secondary.dark,
    borderRadius: Layout.borderRadius.small,
    marginBottom: Layout.spacing.s,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.primary.default,
    borderRadius: Layout.borderRadius.small,
  },
  progressText: {
    fontSize: 12,
    color: Colors.text.secondary,
    textAlign: 'right',
    fontFamily: 'Inter-Regular',
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
    gap: Layout.spacing.s,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
    alignItems: 'center',
    ...Layout.shadow.light,
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
    fontFamily: 'Poppins-Bold',
  },
  statIcon: {
    marginLeft: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.text.tertiary,
    marginTop: 4,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  transactionsContainer: {
    padding: Layout.spacing.m,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    fontFamily: 'Inter-SemiBold',
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.primary.default,
    fontFamily: 'Inter-Medium',
  },
});