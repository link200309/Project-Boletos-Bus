import React from "react";
import { TabsContainer } from "../../ReserveSeat/components/TabsContainer";
import { View } from "react-native";

export default function PayReservation({ route }) {
  const { payDetails } = route.params || {};
  return (
    <View>
      <TabsContainer passengers={payDetails} travelDetails={payDetails} />
    </View>
  );
}
