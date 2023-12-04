import { Text } from "@/components/Themed";
import strings from "@/constants/ui/common";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet } from "react-native";

type ResultCountProps = {
  visible: boolean;
  resultCount: number;
};

export function ResultCount({ visible, resultCount }: ResultCountProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];
  if (!visible) return null;

  return (
    <Text style={styles.resultCount}>
      {`${resultCount} ${resultCount === 1 ? ui.result : ui.results}`}
    </Text>
  );
}

const styles = StyleSheet.create({
  resultCount: {
    padding: 16,
    alignSelf: "center",
  },
});
