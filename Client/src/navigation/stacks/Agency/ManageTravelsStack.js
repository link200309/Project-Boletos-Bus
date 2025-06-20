//React
import { createStackNavigator } from "@react-navigation/stack";

//Components
import ManageTravelsScreen from "../../../screens/Agency/ManageTravels/ManageTravelsScreen";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import AddTravelScreen from "../../../screens/Agency/ManageTravels/AddTravelScreen";
import DetailsTravelScreen from "../../../screens/Agency/ManageTravels/DetailsTravelScreen";
import ReservationsTravelScreen from "../../../screens/Agency/ManageTravels/ReservationsTravelScreen";
import ReservationDetailsScreen from "../../../screens/Agency/ManageTravels/ReservationDetailsScreen";
import EditTravelScreen from "../../../screens/Agency/ManageTravels/EditTravelScreen";
const Stack = createStackNavigator();

export default function ManageTravelsStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="ManageTravels"
        component={ManageTravelsScreen}
        options={{ title: "Gestion de viajes" }}
      />
      <Stack.Screen
        name="AddTravels"
        component={AddTravelScreen}
        options={{ title: "Agregar viajes" }}
      />
      <Stack.Screen
        name="DetailsTravel"
        component={DetailsTravelScreen}
        options={{ title: "Detalles viajes" }}
      />
      <Stack.Screen
        name="ReservationsTravel"
        component={ReservationsTravelScreen}
        options={{ title: "Reservas de viajes" }}
      />
      <Stack.Screen
        name="ReservationDetails"
        component={ReservationDetailsScreen}
        options={{ title: "Detalle de reserva" }}
      />
      <Stack.Screen
        name="EditTravel"
        component={EditTravelScreen}
        options={{ title: "Editar Viaje" }}
      />
    </Stack.Navigator>
  );
}
