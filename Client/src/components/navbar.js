import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function BottomNavBar({ active }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab}>
                <Ionicons name="home" size={24} color={active === 'home' ? '#4B3DFE' : 'black'} />
                <Text style={[styles.label, active === 'home' && styles.activeLabel]}>Reservar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Ionicons name="clipboard" size={24} color={active === 'reservas' ? '#4B3DFE' : 'black'} />
                <Text style={[styles.label, active === 'reservas' && styles.activeLabel]}>Mis reservas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Ionicons name="settings" size={24} color={active === 'ajustes' ? '#4B3DFE' : 'black'} />
                <Text style={[styles.label, active === 'ajustes' && styles.activeLabel]}>Ajustes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    tab: {
        alignItems: 'center'
    },
    label: {
        fontSize: 12,
    },
    activeLabel: {
        color: '#4B3DFE',
        fontWeight: 'bold'
    }
});