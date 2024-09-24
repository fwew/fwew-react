import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { Text } from "@/components/common/Themed";
import { FlagMap } from "@/components/settings/Flags";
import { AppLanguages } from "@/constants/Language";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { StyleSheet, View } from "react-native";

export function AppLanguageSelect() {
  const { appLanguage, saveAppLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View style={styles.icon}>{FlagMap[appLanguage]}</View>
          <Text style={styles.value}>{ui.settings.appLanguage}</Text>
        </View>
      }
      openedContent={
        <View style={styles.contentContainer}>
          {AppLanguages.map((language, i) => (
            <View key={`sal_${i}`}>
              <OptionItem
                icon={FlagMap[language.value]}
                value={language.label}
                selected={appLanguage === language.value}
                onSelect={() => saveAppLanguage(language.value)}
              />
            </View>
          ))}
        </View>
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
    paddingHorizontal: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
