import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ShoppingBag, Clock, MapPin, Coins, Share2, X } from 'lucide-react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { rewards } from '../../utils/mockData';

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [showQR, setShowQR] = useState(false);
  
  const reward = rewards.find(r => r.id === id);
  
  if (!reward) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Detalle de Premio" showBackButton={true} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>The product you're looking for doesn't exist.</Text>
          <Button
            title="Go Back"
            onPress={() => router.back()}
            variant="primary"
            size="medium"
          />
        </View>
      </SafeAreaView>
    );
  }

  const handleRedeem = () => {
    setShowQR(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Detalle de Premio" 
        showBackButton={true}
        rightComponent={
          <TouchableOpacity style={styles.shareButton}>
            <Share2 size={24} color={Colors.text.primary} />
          </TouchableOpacity>
        }
      />
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: reward.image }} style={styles.productImage} />
        
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{reward.discount}</Text>
        </View>
        
        <View style={styles.productContent}>
          <Text style={styles.productName}>{reward.name}</Text>
          
          <View style={styles.priceContainer}>
            <View style={styles.milcoinsContainer}>
              <Coins size={24} color={Colors.primary.default} />
              <Text style={styles.milcoinsPrice}>{reward.price}</Text>
            </View>
            
            <View style={styles.retailPriceContainer}>
              <Text style={styles.originalPrice}>{reward.originalPrice}</Text>
              <Text style={styles.finalPrice}>{reward.finalPrice}</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.descriptionTitle}>Descripcion</Text>
          <Text style={styles.descriptionText}>{reward.longDescription}</Text>
          
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Clock size={20} color={Colors.text.secondary} />
              <Text style={styles.infoText}>Válido hasta {reward.expiry}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <MapPin size={20} color={Colors.text.secondary} />
              <Text style={styles.infoText}>
                Disponible en: {reward.stores.join(', ')}
              </Text>
            </View>
          </View>
          
          <View style={styles.howToUseContainer}>
            <Text style={styles.howToUseTitle}>Como usar</Text>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <Text style={styles.stepText}>Presiona sobre "Canjear Ahora" para obtener tu código</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <Text style={styles.stepText}>Muestra el código al vendedor</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <Text style={styles.stepText}>Aprovecha esta oferta</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footerContainer}>
        <Button
          title="Canjear Ahora"
          onPress={handleRedeem}
          variant="primary"
          size="large"
          fullWidth
          leftIcon={<ShoppingBag size={20} color={Colors.secondary.default} style={{ marginRight: 8 }} />}
        />
      </View>

      <Modal
        visible={showQR}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowQR(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowQR(false)}
            >
              <X size={24} color={Colors.text.primary} />
            </TouchableOpacity>
            
            <Text style={styles.modalTitle}>Tu código de canje</Text>
            
            <Image 
              source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${reward.id}` }}
              style={styles.qrCode}
            />
            
            <Text style={styles.modalDescription}>
              Muestra este código QR al vendedor para redimir tu premio
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
  },
  scrollContainer: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.xl,
  },
  errorText: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: Layout.spacing.l,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
  shareButton: {
    padding: Layout.spacing.xs,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: Layout.spacing.m,
    right: Layout.spacing.m,
    backgroundColor: Colors.primary.default,
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.small,
  },
  discountText: {
    color: Colors.secondary.default,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  productContent: {
    padding: Layout.spacing.l,
  },
  productName: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.m,
    fontFamily: 'Poppins-Bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.l,
  },
  milcoinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  milcoinsPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary.default,
    marginLeft: Layout.spacing.xs,
    fontFamily: 'Poppins-Bold',
  },
  retailPriceContainer: {
    alignItems: 'flex-end',
  },
  originalPrice: {
    fontSize: 14,
    color: Colors.text.tertiary,
    textDecorationLine: 'line-through',
    fontFamily: 'Inter-Regular',
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    fontFamily: 'Inter-SemiBold',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginBottom: Layout.spacing.l,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.s,
    fontFamily: 'Inter-SemiBold',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.text.secondary,
    lineHeight: 22,
    marginBottom: Layout.spacing.l,
    fontFamily: 'Inter-Regular',
  },
  infoContainer: {
    backgroundColor: Colors.secondary.dark,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  infoText: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginLeft: Layout.spacing.s,
    flex: 1,
    fontFamily: 'Inter-Regular',
  },
  howToUseContainer: {
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
  },
  howToUseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.m,
    fontFamily: 'Inter-SemiBold',
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: Layout.borderRadius.circle,
    backgroundColor: Colors.primary.default,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.secondary.default,
    fontFamily: 'Inter-SemiBold',
  },
  stepText: {
    fontSize: 14,
    color: Colors.text.secondary,
    flex: 1,
    fontFamily: 'Inter-Regular',
  },
  footerContainer: {
    padding: Layout.spacing.l,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
    backgroundColor: Colors.background.light,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colors.background.light,
    borderRadius: Layout.borderRadius.large,
    padding: Layout.spacing.xl,
    width: '80%',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: Layout.spacing.m,
    top: Layout.spacing.m,
    padding: Layout.spacing.xs,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.l,
    fontFamily: 'Inter-SemiBold',
  },
  qrCode: {
    width: 200,
    height: 200,
    marginVertical: Layout.spacing.l,
  },
  modalDescription: {
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginTop: Layout.spacing.m,
    fontFamily: 'Inter-Regular',
  },
});