import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { SwitchInput } from "@/components/common/SwitchInput";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useValid } from "@/hooks/useValid";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function ValidScreen() {
  const {
    query,
    results,
    loading,
    search,
    execute,
    cancel,
  } = useValid();
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].search;

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
      }
    >
      <SearchBar query={query} search={search} cancel={cancel} autoFocus />
      <p>{results}</p>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});