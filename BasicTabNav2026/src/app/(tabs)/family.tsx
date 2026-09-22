import defaultStyles from "@/styles/defaultStyles";
import { Text, View } from "react-native";

export default function FamilyScreen() {
  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.bodyText}>My Family</Text>
      <Text style={defaultStyles.bodyText}>Hiiii</Text>
    </View>
  );
}
