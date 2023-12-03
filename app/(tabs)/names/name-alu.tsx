import { Accordion } from "@/components/Accordion";
import { NumericTextInput } from "@/components/NumericTextInput";
import { OptionItem } from "@/components/OptionItem";
import { SwitchInput } from "@/components/SwitchInput";
import { Text, View } from "@/components/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import { AdjectiveModes } from "@/constants/NameAlu";
import { useNameAlu } from "@/hooks/useNameAlu";
import { ScrollView, StyleSheet } from "react-native";

export default function NameAluScreen() {
  const {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    nounMode,
    setNounMode,
    adjMode,
    setAdjMode,
    dialect,
    setDialect,
    execute,
  } = useNameAlu();

  const disabled =
    !numNames || !numSyllables || !nounMode || !adjMode || !dialect;

  return (
    <ScrollView>
      <Accordion
        closedContent={<Text>Options</Text>}
        openedContent={
          <>
            <Text style={styles.label}>Number of Names to Generate</Text>
            <NumericTextInput
              placeholder="1-50"
              value={numNames}
              onChangeText={updateNumNames}
              autoFocus
            />
            <Text style={styles.label}>Number of Syllables</Text>
            <NumericTextInput
              placeholder="1-4"
              value={numSyllables}
              onChangeText={updateNumSyllables}
            />
            <Text style={styles.label}>Noun Mode</Text>
            <SwitchInput
              leftLabel="normal noun"
              rightLabel="verb-er"
              value={nounMode === "verb-er"}
              onValueChange={(isVerb) =>
                setNounMode(isVerb ? "verb-er" : "normal noun")
              }
            />
            <Text style={styles.label}>Adjective Mode</Text>
            {AdjectiveModes.map((item, i) => (
              <OptionItem
                key={`na_a_${i}`}
                value={item}
                selected={adjMode === item}
                onSelect={() => setAdjMode(item)}
              />
            ))}
            <Text style={styles.label}>Dialect</Text>
            <SwitchInput
              leftLabel="Forest"
              rightLabel="Reef"
              value={dialect === "reef"}
              onValueChange={(isReef) => setDialect(isReef ? "reef" : "forest")}
            />
          </>
        }
      />
      <GenerateButton execute={execute} disabled={disabled} />
      <View>
        {names.map((name, i) => (
          <Text key={`na_r_${i}`} selectable style={styles.name}>
            {name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    padding: 10,
    fontSize: 16,
  },
});
