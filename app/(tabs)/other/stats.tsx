import { Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useStats } from "@/hooks/useStats";
import { useTheme } from "@react-navigation/native";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function StatsScreen() {
  const { wordCount, phonemeGrid, clusterMap, loading } = useStats();
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].stats;
  const { width, height } = useWindowDimensions();
  const landscape = width > height;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.text} size="large" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          {
            flexDirection: landscape ? "row" : "column",
            flexWrap: landscape ? "wrap" : undefined,
            paddingTop: landscape ? 16 : 0,
          },
        ]}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.header}>{wordCount}</Text>
          <PhonemeTable data={phonemeGrid} />
        </View>

        <View style={{ alignItems: "center" }}>
          {clusterMap.length > 0 && (
            <Text style={styles.header}>{ui.clusters}</Text>
          )}
          <ClusterTable data={clusterMap} />
        </View>
      </View>
    </ScrollView>
  );
}

function PhonemeTable({ data }: { data: string[][] }) {
  return (
    <View style={styles.phonemeTable}>
      {data.map((row, index) => {
        if (index === 0) {
          return <PhonemeTableHeaderRow key={`pthr_r${index}`} row={row} />;
        }
        return <PhonemeTableRow key={`ptr_r${index}`} row={row} />;
      })}
    </View>
  );
}

function PhonemeTableHeaderRow({ row }: { row: string[] }) {
  return (
    <View style={styles.row}>
      {row.map((col, i) => {
        return (
          <Text key={`pthr_c${i}`} style={styles.phonemeHeader}>
            {col}
          </Text>
        );
      })}
    </View>
  );
}

function PhonemeTableRow({ row }: { row: string[] }) {
  return (
    <View style={styles.row}>
      {row.map((col, i) => {
        const [phoneme, frequency] = col.split(" ");
        return (
          <View key={`ptr_c${i}`} style={styles.phonemeCol}>
            <Text style={styles.phoneme}>{phoneme}</Text>
            <Text>{frequency}</Text>
          </View>
        );
      })}
    </View>
  );
}

function ClusterTable({ data }: { data: string[][] }) {
  return (
    <View style={styles.clusterTable}>
      {data.map((row, index) => {
        if (index === 0) {
          return <ClusterTableHeaderRow key={`cthr_r${index}`} row={row} />;
        }
        return <ClusterTableRow key={`ctr_r${index}`} row={row} />;
      })}
    </View>
  );
}

function ClusterTableHeaderRow({ row }: { row: string[] }) {
  return (
    <View style={styles.row}>
      {row.map((col, i) => {
        return (
          <View key={`cthr_c${i}`} style={styles.clusterCol}>
            <Text style={styles.clusterHeading}>{col}</Text>
          </View>
        );
      })}
    </View>
  );
}

function ClusterTableRow({ row }: { row: string[] }) {
  return (
    <View style={styles.row}>
      {row.map((col, i) => {
        if (i === 0) {
          return <ClusterTableHeaderCol key={`ctr_c${i}`} col={col} />;
        }
        return <ClusterTableCol key={`ctr_c${i}`} col={col} />;
      })}
    </View>
  );
}

function ClusterTableHeaderCol({ col }: { col: string }) {
  return (
    <View style={styles.clusterCol}>
      <Text style={styles.clusterHeading}>{col}</Text>
    </View>
  );
}

function ClusterTableCol({ col }: { col: string }) {
  return (
    <View style={styles.clusterCol}>
      <Text style={styles.clusterCell}>{col}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "stretch",
    width: "80%",
    gap: 32,
    paddingBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  words: {
    fontSize: 16,
  },
  phonemeTable: {
    width: 200,
    alignSelf: "center",
    gap: 16,
  },
  clusterTable: {
    width: 200,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phonemeHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phonemeCol: {
    width: 48,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phoneme: {
    fontWeight: "bold",
  },
  clusterCol: {
    width: 48,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  clusterHeading: {
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  clusterCell: {
    padding: 8,
  },
});