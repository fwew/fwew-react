{
  /* This file is part of fwew-react. 
    fwew-react: Fwew Na'vi Dictionary app written using React Native
    Copyright (C) 2020  Corey Scheideman <corscheid@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. */
}
import React from "react";
import { Button, StyleSheet, ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "./colors";

// content of the modal which appears when user taps on an entry
function RandomSettings({ onSettingsBackButtonPress }) {
  const [languageCode, setLanguageCode] = React.useState("en");
  const [numRandomWords, setNumRandomWords] = React.useState("8");

  return (
    <View style={styles.modalContainer}>
      <Text selectable={true} style={styles.modal_navi}>
        random | settings
      </Text>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.modal_label}>language</Text>
        <TextInput
          mode="outlined"
          label="language"
          value={languageCode}
          placeholder="en"
          theme={inputTheme}
          style={styles.input}
          onChangeText={(text) => {
            setLanguageCode(text);
          }}
        />
        <Text style={styles.modal_label}>number of random words</Text>
        <TextInput
          mode="outlined"
          label="number of random words"
          value={numRandomWords}
          placeholder="8"
          theme={inputTheme}
          style={styles.input}
          onChangeText={(text) => {
            setNumRandomWords(text);
          }}
        />
        <Text style={styles.modal_label}>word</Text>
        <TextInput
          mode="outlined"
          label="word has..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="word starts with..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="word ends with..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="word is like..."
          theme={inputTheme}
          style={styles.input}
        />
        <Text style={styles.modal_label}>part of speech</Text>
        <TextInput
          mode="outlined"
          label="part of speech is..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="part of speech has..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="part of speech starts with..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="part of speech ends with..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="part of speech is like..."
          theme={inputTheme}
          style={styles.input}
        />
        <Text style={styles.modal_label}>syllables</Text>
        <TextInput
          mode="outlined"
          label="#syllables < ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="#syllables ≤ ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="#syllables = ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="#syllables ≥ ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="#syllables > ..."
          theme={inputTheme}
          style={styles.input}
        />
        <Text style={styles.modal_label}>stress</Text>
        <TextInput
          mode="outlined"
          label="stressed syllable < ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="stressed syllable ≤ ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="stressed syllable = ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="stressed syllable ≥ ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="stressed syllable > ..."
          theme={inputTheme}
          style={styles.input}
        />
        <Text style={styles.modal_label}>words</Text>
        <TextInput
          mode="outlined"
          label="words first ..."
          theme={inputTheme}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="words last ..."
          theme={inputTheme}
          style={styles.input}
        />
      </ScrollView>
      <View style={styles.modal_button}>
        <Button
          title="back"
          onPress={onSettingsBackButtonPress}
          color={colors.secondary}
        />
      </View>
    </View>
  );
}

const inputTheme = {
  colors: {
    primary: colors.primary,
    accent: colors.secondary,
  },
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: "80%",
    marginBottom: 16,
  },
  modalContainer: {
    backgroundColor: colors.modalBackground,
    flexDirection: "column",
    padding: 16,
    borderRadius: 16,
    borderColor: colors.modalBorder,
  },
  modal_group: {
    marginTop: 16,
    marginBottom: 16,
  },
  modal_navi: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  modal_label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modal_text: {
    fontSize: 14,
    fontWeight: "normal",
  },
  modal_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.modalRowBorder,
    borderRadius: 4,
    padding: 12,
  },
  dropdown: {
    width: 128,
  },
  input: {
    backgroundColor: colors.inputBackground,
  },
  modal_button: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default RandomSettings;
