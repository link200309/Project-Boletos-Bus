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

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Pasajero {index + 1}</Text>
                <Text style={styles.seat}>Asiento: {passenger.seat}</Text>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>
                    Nombre <Text style={styles.asterisk}>*</Text>
                </Text>
                <TextInput
                    placeholder="Ingresa nombre(s)"
                    value={passenger.firstName}
                    onChangeText={(text) => handlePassengerChange(index, 'firstName', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>
                    Apellido <Text style={styles.asterisk}>*</Text>
                </Text>
                <TextInput
                    placeholder="Ingresa apellido(s)"
                    value={passenger.lastName}
                    onChangeText={(text) => handlePassengerChange(index, 'lastName', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.rowContainer}>
                <View style={[styles.halfContainer, styles.inputGroup]}>
                    <Text style={styles.label}>
                        N° de Identidad <Text style={styles.asterisk}>*</Text>
                    </Text>
                    <TextInput
                        placeholder="N° de Identidad"
                        value={passenger.identityNumber}
                        onChangeText={(text) => handlePassengerChange(index, 'identityNumber', text)}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>

                <View style={[styles.halfContainer, styles.inputGroup]}>
                    <Text style={styles.label}>
                        Fecha de Nacimiento <Text style={styles.asterisk}>*</Text>
                    </Text>
                    <View style={styles.dateInputContainer}>
                        <TextInput
                            value={passenger.birthDate}
                            onChangeText={(text) => handlePassengerChange(index, 'birthDate', text)}
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
    container: {
        borderRadius: 20,
        width: 370,
        padding: 25,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
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
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 8,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 13,
    },
    asterisk: {
        color: '#FF0000',
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6E8FF',
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
    },
    dateInput: {
        flex: 1,
        paddingVertical: 15,
        color: '#000000',
    },
    calendarIcon: {
        paddingLeft: 8,
    },
});

export default PassengerCard;