import { createStackNavigator } from '@react-navigation/stack';
import DatosPasajerosScreen from '../screens/DatosPasajerosScreen';
import ResumenReservaScreen from '../screens/ResumenReservaScreen';
import colors from '../styles/colors'; // Importa los colores definidos en tu archivo de estilos

const Stack = createStackNavigator();

const ReservaNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="DatosPasajeros">
      <Stack.Screen 
        name="DatosPasajeros" 
        component={DatosPasajerosScreen} 
        options={{ 
          title: 'Datos de Pasajero(s)', 
          headerStyle: { backgroundColor: colors.primary }, // Fondo morado en la barra de título
          headerTintColor: '#fff', // Color del texto (blanco)
        }}
      />
      <Stack.Screen 
        name="ResumenReserva" 
        component={ResumenReservaScreen} 
        options={{ 
          title: 'Resumen de Reserva',
          headerStyle: { backgroundColor: colors.primary }, // Fondo morado en la barra de título
          headerTintColor: '#fff', // Color del texto (blanco)
        }}
      />
    </Stack.Navigator>
  );
};

export default ReservaNavigation;
