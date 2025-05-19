import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from '@expo/vector-icons';

export const PassengerCard = ({ index, passenger, handlePassengerChange, containerStyle }) => {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        const formattedDate = date.toLocaleDateString("es-ES");
        handlePassengerChange(index, 'birthDate', formattedDate);
        hideDatePicker();
    };

    const handleTextChange = (index, field, value) => {
        let newValue = value.toUpperCase();

        if (field === 'firstName' || field === 'lastName') {
            // Allow only letters, spaces, and limit to 20 characters, transform to uppercase
            newValue = newValue.replace(/[^A-ZÁÉÍÓÚÜÑ\s]/g, '').substring(0, 20);
        }
        if (field === 'identityNumber') {
            // Allow only numbers and limit to 10 characters
            newValue = newValue.replace(/[^0-9]/g, '').substring(0, 10);
        }
        if (field === 'birthDate') {
            // Allow only numbers, limit to 8 characters, and format as dd/mm/yyyy
            newValue = newValue.replace(/[^0-9]/g, '').substring(0, 8);
            if (newValue.length === 8) {
                newValue = `${newValue.substring(0, 2)}/${newValue.substring(2, 4)}/${newValue.substring(4, 8)}`;
            }
        }
        handlePassengerChange(index, field, newValue);
    };

    return (
        <View style={[styles.card, containerStyle]}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Pasajero {index + 1}</Text>
                <Text style={styles.seat}>Asiento: {passenger.seat}</Text>
            </View>

            <Text style={styles.label}>
                Nombre <Text style={styles.asterisk}> * </Text>
            </Text>
            <TextInput
                placeholder="Ingresa nombre(s)"
                value={passenger.firstName}
                onChangeText={(text) => handleTextChange(index, 'firstName', text)}
                style={styles.input}
            />

            <Text style={styles.label}>
                Apellido <Text style={styles.asterisk}> * </Text>
            </Text>
            <TextInput
                placeholder="Ingresa apellido(s)"
                value={passenger.lastName}
                onChangeText={(text) => handleTextChange(index, 'lastName', text)}
                style={styles.input}
            />

            <View style={styles.rowContainer}>
                <View style={styles.halfContainer}>
                    <Text style={styles.label}>
                        N° de Identidad <Text style={styles.asterisk}> * </Text> 
                    </Text>
                    <TextInput
                        placeholder="N° de Identidad"
                        value={passenger.identityNumber}
                        onChangeText={(text) => handleTextChange(index, 'identityNumber', text)}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>

                <View style={styles.halfContainer}>
                    <Text style={styles.label}>
                        Fecha de Nacimiento  <Text style={styles.asterisk}> * </Text>
                    </Text>
                    <View style={styles.dateInputContainer}>
                        <TextInput
                            value={passenger.birthDate}
                            onChangeText={(text) => handleTextChange(index, 'birthDate', text)}
                            keyboardType="numeric"
                            style={styles.dateInput}
                        />
                        <TouchableOpacity onPress={showDatePicker} style={styles.calendarIcon}>
                            <MaterialIcons name="calendar-today" size={24} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                maximumDate={new Date()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        margin: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
        width: '90%',
        alignSelf: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    seat: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    label: {
        marginBottom: 5,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 13,
    },
    asterisk:{
        color: '#FF0000',
    },
    input: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6E8FF',
        marginBottom: 10,
        width: '100%',
        color: '#000000',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfContainer: {
        width: '48%',
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6E8FF',
        marginBottom: 10,
    },
    dateInput: {
        flex: 1,
        paddingVertical: 10,
        color: '#000000',
    },
    calendarIcon: {
        paddingLeft: 8,
    },
});

export default PassengerCard;