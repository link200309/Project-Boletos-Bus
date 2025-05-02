// src/components/MainLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer'; // Importamos el footer

const MainLayout = ({ children, showFooter = true }) => {  // showFooter controla si mostrar el footer
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      {showFooter && <Footer />}  {/* Condición para mostrar el footer */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;
