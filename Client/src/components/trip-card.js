import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TripCard({ trip }) {
    return (
        <View style={styles.card}>
            <Text style={styles.route}>{trip.from} → {trip.to}</Text>
            <Text style={styles.date}>{trip.date}</Text>
            <View style={styles.row}><Text>Agencia: <Text style={styles.bold}>{trip.agency}</Text></Text></View>
            <View style={styles.row}><Text>Tipo: <Text style={styles.bold}>{trip.type}</Text></Text></View>
            <View style={styles.row}><Text>Asientos: <Text style={styles.bold}>{trip.seats}</Text></Text></View>
            <View style={styles.row}><Text>Total: <Text style={styles.bold}>{trip.total}</Text></Text></View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.editButton}><Text style={styles.editText}>Editar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}><Text style={styles.cancelText}>Cancelar</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
    },
    route: {
        color: '#4B3DFE',
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        color: '#555',
        marginBottom: 8,
    },
    row: {
        marginBottom: 4,
    },
    bold: {
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    editButton: {
        backgroundColor: '#4B3DFE',
        padding: 10,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
    },
    cancelButton: {
        borderColor: '#4B3DFE',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
    },
    editText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    cancelText: {
        color: '#4B3DFE',
        fontWeight: 'bold'
    }
});