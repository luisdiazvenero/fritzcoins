// app/(tabs)/rewards.tsx
import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Filter, Coins } from 'lucide-react-native';
import Header from '../../components/Header';
import RewardCard from '../../components/RewardCard';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { rewards, userData } from '../../utils/mockData';

export default function RewardsScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'Salsas', label: 'Salsas' },
    { id: 'Picantes', label: 'Picantes' },
    { id: 'Bases Saborizadas', label: 'Bases Saborizadas' },
  ];

  const filteredRewards = selectedCategory === 'all' 
    ? rewards 
    : rewards.filter(reward => reward.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Catálogo de Premios" 
        showBackButton={false}
      />

      <ScrollView 
        style={styles.mainScrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.balanceContainer}>
          <View style={styles.balanceContent}>
            <Text style={styles.balanceLabel}>Mi Saldo</Text>
            <View style={styles.balanceRow}>
              <Coins size={20} color={Colors.secondary.default} />
              <Text style={styles.balanceValue}>{userData.balance}</Text>
            </View>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color={Colors.text.tertiary} />
            <Text style={styles.searchPlaceholder}>Buscar premios</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={Colors.text.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesWrapper}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.categoriesContent}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && styles.categoryButtonSelected,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category.id && styles.categoryButtonTextSelected,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.rewardsContainer}>
          <Text style={styles.sectionTitle}>Canjea tus FritzCoins</Text>
          <View style={styles.rewardsGrid}>
            {filteredRewards.map((reward) => (
              <RewardCard
                key={reward.id}
                id={reward.id}
                name={reward.name}
                description={reward.description}
                image={reward.image}
                price={reward.price}
                discount={reward.discount}
                originalPrice={reward.originalPrice}
                finalPrice={reward.finalPrice}
                onPress={() => router.push(`/product/${reward.id}`)}
              />
            ))}
          </View>
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
  mainScrollView: {
    flex: 1,
  },
  balanceContainer: {
    backgroundColor: Colors.primary.default,
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.m,
  },
  balanceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceLabel: {
    fontSize: 14,
    color: Colors.secondary.default,
    fontFamily: 'Inter-Regular',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.secondary.default,
    marginLeft: Layout.spacing.xs,
    fontFamily: 'Inter-SemiBold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Layout.spacing.m,
  },
  searchBar: {
    flex: 1,
    height: 44,
    backgroundColor: Colors.secondary.dark,
    borderRadius: Layout.borderRadius.medium,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.m,
  },
  searchPlaceholder: {
    marginLeft: Layout.spacing.s,
    color: Colors.text.tertiary,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  filterButton: {
    width: 44,
    height: 44,
    backgroundColor: Colors.secondary.dark,
    borderRadius: Layout.borderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Layout.spacing.s,
  },
  categoriesWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    backgroundColor: Colors.background.light,
  },
  categoriesContent: {
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.s,
    gap: Layout.spacing.s,
  },
  categoryButton: {
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.s,
    backgroundColor: Colors.secondary.dark,
    borderRadius: Layout.borderRadius.medium,
    marginRight: Layout.spacing.s,
  },
  categoryButtonSelected: {
    backgroundColor: Colors.primary.default,
  },
  categoryButtonText: {
    fontSize: 14,
    color: Colors.text.primary,
    fontFamily: 'Inter-Medium',
  },
  categoryButtonTextSelected: {
    color: Colors.secondary.default,
  },
  rewardsContainer: {
    padding: Layout.spacing.m,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.m,
    fontFamily: 'Inter-SemiBold',
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
