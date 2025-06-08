//React
import { createStackNavigator } from "@react-navigation/stack";

//Components
import ManageTravelsScreen from "../../../screens/Agency/ManageTravels/ManageTravelsScreen";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import AddTravelScreen from "../../../screens/Agency/ManageTravels/AddTravelScreen";

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
    </Stack.Navigator>
  );
}
