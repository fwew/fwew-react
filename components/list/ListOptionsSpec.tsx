import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type ListOptionsSpecProps = {
  handleSelectionSpec: () => void;
  andButtonDisabled: boolean;
  execute: () => void;
};

export function ListOptionsSpec({
  handleSelectionSpec,
  andButtonDisabled,
  execute,
}: ListOptionsSpecProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  return (
    <View style={styles.specButtonContainer}>
      <TouchableOpacity
        onPress={handleSelectionSpec}
        style={[
          styles.button,
          {
            borderColor: andButtonDisabled ? colors.placeholder : colors.text,
          },
        ]}
        disabled={andButtonDisabled}
      >
        <Text
          style={{
            color: andButtonDisabled ? colors.placeholder : colors.text,
          }}
        >
          {ui.and}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={execute}
        style={[
          styles.button,
          {
            borderColor: andButtonDisabled ? colors.placeholder : colors.text,
          },
        ]}
        disabled={andButtonDisabled}
      >
        <Text
          style={{
            color: andButtonDisabled ? colors.placeholder : colors.text,
          }}
        >
          {ui.go}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  specButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  button: {
    width: 80,
    alignSelf: "center",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
