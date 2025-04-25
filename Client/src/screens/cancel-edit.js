import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import TripCard from "../components/trip-card";
import BottomNavBar from "../components/navbar";
import TopBar from "../components/top-bar";

const trips = [
    {
        from: "Cochabamba",
        to: "La Paz",
        date: "18 de Abril - 07:30",
        agency: "El Dorado",
        type: "CAMA",
        seats: 2,
        total: "Bs. 190"
    },
    {
        from: "Santa Cruz",
        to: "Cochabamba",
        date: "20 de Abril - 11:00",
        agency: "El Dorado",
        type: "SEMI-CAMA",
        seats: 1,
        total: "Bs. 95"
    }
];

export default function CancelEditReservationScreen() {
    return (
        <View style={styles.container}>
            <TopBar />
            <ScrollView contentContainerStyle={styles.content}>
                {trips.map((trip, index) => (
                    <TripCard key={index} trip={trip} />
                ))}
            </ScrollView>
            <BottomNavBar active="reservas" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eae6f8'
    },
    content: {
        padding: 16,
        paddingBottom: 80
    }
});
