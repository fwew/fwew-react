import { ScreenLinkCard } from "@/components/common/ScreenLinkCard";
import type { LinkType } from "@/types/common";
import { ScrollView, StyleSheet, View } from "react-native";

export function IndexGrid({ links }: { links: LinkType[] }) {
  return (
    <ScrollView>
      <View style={styles.grid}>
        {links.map((link) => (
          <ScreenLinkCard key={`oi_${link.title}`} {...link} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    padding: 16,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: "auto",
  },
  item: {
    flex: 1,
    minWidth: 320,
    maxWidth: 320,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
});
