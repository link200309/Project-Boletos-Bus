import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
