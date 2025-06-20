import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const HomeIcon = (props) => (
  <Entypo name="home" size={30} color="black" {...props} />
);
export const MyReservationsIcon = (props) => (
  <MaterialCommunityIcons
    name="file-document-edit-outline"
    size={30}
    color="black"
    {...props}
  />
);

export const SettingsIcon = (props) => (
  <Ionicons name="settings" size={30} color="black" {...props} />
);

export const LogoIcon = (props) => (
  <FontAwesome6 name="bus" size={24} color="black" {...props} />
);

export const CalendarIcon = (props) => (
  <FontAwesome name="calendar" size={24} color="black" {...props} />
);

export const Location = (props) => (
  <MaterialCommunityIcons
    name="map-marker-outline"
    size={30}
    color="black"
    {...props}
  />
);

export const ChairIcon = (props) => (
  <MaterialCommunityIcons
    name="chair-rolling"
    size={30}
    color="black"
    {...props}
  />
);

export const BusIcon = (props) => (
  <FontAwesome5 name="bus-alt" size={24} color="black" {...props} />
);

export const BackIcon = (props) => (
  <Ionicons name="arrow-back" size={24} color="black" {...props} />
);

export const ScanQRIcon = (props) => (
  <MaterialCommunityIcons name="card-account-details" size={20} {...props} />
);
export const DateIcon = (props) => (
  <Fontisto name="date" size={24} color="black" {...props} />
);
export const TimeIcon = (props) => (
  <AntDesign name="clockcircleo" size={24} color="black" {...props} />
);
export const GlobalInformationIcon = (props) => (
  <MaterialIcons name="travel-explore" size={24} color="black" {...props} />
);
export const DriverIcon = (props) => (
  <FontAwesome6 name="drivers-license" size={24} color="black" {...props} />
);
