import { useThemeNameContext } from "@/context/ThemeNameContext";
import { ThemeNames } from "@/themes";
import { StyleSheet, View } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";
import { CardView, Text } from "../common/Themed";

export function ThemeSelect() {
  const { themeName, saveThemeName } = useThemeNameContext();

  return (
    <Accordion
      closedContent={
        <CardView style={styles.iconContainer}>
          <View style={styles.icon}>
            <Text style={styles.value}>
              {themeName.slice(0, 2).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.value}>Theme</Text>
        </CardView>
      }
      openedContent={
        <CardView style={styles.contentContainer}>
          {ThemeNames.map((tn, i) => (
            <CardView key={`stn_${i}`}>
              <OptionItem
                icon={
                  <Text style={[styles.icon, styles.value]}>
                    {tn.slice(0, 2).toUpperCase()}
                  </Text>
                }
                value={tn}
                selected={themeName === tn}
                onSelect={() => saveThemeName(tn)}
              />
            </CardView>
          ))}
        </CardView>
      }
    />
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 0,
  },
  icon: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
