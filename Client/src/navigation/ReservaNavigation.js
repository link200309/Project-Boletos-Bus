import { createStackNavigator } from '@react-navigation/stack';
import DatosPasajerosScreen from '../screens/DatosPasajerosScreen';
import ResumenReservaScreen from '../screens/ResumenReservaScreen';

const Stack = createStackNavigator();

const ReservaNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="DatosPasajeros">
      <Stack.Screen 
        name="DatosPasajeros" 
        component={DatosPasajerosScreen} 
        options={{ title: 'Datos de Pasajeros' }}
      />
      <Stack.Screen 
        name="ResumenReserva" 
        component={ResumenReservaScreen} 
        options={{ title: 'Resumen de Reserva' }}
      />
    </Stack.Navigator>
  );
};

export default ReservaNavigation;