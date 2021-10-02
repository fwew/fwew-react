/**
 * This file is part of fwew-react.
 * fwew-react: Fwew Na'vi Dictionary app written using React Native
 * Copyright (C) 2021  Corey Scheideman <corscheid@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { Card, List } from 'react-native-paper'
import React, { useContext, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import { FAB } from 'react-native-paper'
import If from './if'
import { ListWCS } from '../lib/interfaces/list-wcs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SettingsContext } from '../context'
import colors from '../lib/colors'
import { ui } from '../lib/i18n'

function ListForm(): JSX.Element {
  const { settingsList, settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].listRandomForm
  const [what, setWhat] = useState('')
  const [cond, setCond] = useState('')
  const [spec, setSpec] = useState('')
  const [array, setArray] = useState([])

  const clearValues = (): void => {
    setWhat('')
    setCond('')
    setSpec('')
    setArray([])
  }

  const deleteItem = (index: number): void => {
    const newArray = [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length)
    ]
    setWhat('')
    setCond('')
    setSpec('')
    setArray(newArray)
  }

  const updateWhat = (index: number, what: string): void => {
    const newArray = [...array]
    newArray[index].what = what
    setWhat(what)
    setArray(newArray)
  }

  const updateCond = (index: number, cond: string): void => {
    const newArray = [...array]
    newArray[index].cond = cond
    setCond(cond)
    setArray(newArray)
  }

  const updateSpec = (index: number, spec: string): void => {
    const newArray = [...array]
    newArray[index].spec = spec
    setSpec(spec)
    setArray(newArray)
  }

  const add = (): void => {
    setWhat('')
    setCond('')
    setSpec('')
    const newWcs = { what: '', cond: '', spec: '' }
    setArray([...array, newWcs])
  }

  return (
    <View>
      <ScrollView style={styles.listFormContainer}>
        {array.map((wcs, idx) => (
          // @ts-ignore
          <Card style={styles.card} key={`${idx}_wcs`}>
            {/* @ts-ignore */}
            <Card.Title title={idx === 0 ? 'list...' : 'and...'} />
            <Card.Content>
              <Text
                style={styles.selections}
              >{`${wcs.what} ${wcs.cond} ${wcs.spec}`}</Text>
              <View>
                <If condition={!wcs.what}>
                  <View>
                    {Object.keys(settingsList).map((item, index) => (
                      <List.Item
                        key={`${index}_what`}
                        title={strings[item]}
                        onPress={() => updateWhat(idx, item)}
                        right={(_props) => (
                          <MaterialIcons name="chevron-right" size={28} />
                        )}
                      />
                    ))}
                  </View>
                </If>
                <View>
                  {!!wcs.what &&
                    !wcs.cond &&
                    Object.keys(settingsList[wcs.what]).map((item, index) => (
                      // @ts-ignore
                      <List.Item
                        key={`${index}_cond`}
                        title={strings[item]}
                        onPress={() => updateCond(idx, item)}
                        right={(_props) => (
                          <MaterialIcons name="chevron-right" size={28} />
                        )}
                      />
                    ))}
                </View>
                <If condition={!!what && !!cond}>
                  <TextInput
                    style={styles.textInput}
                    value={wcs.spec}
                    onChangeText={(text) => updateSpec(idx, text)}
                  />
                </If>
                <View style={styles.buttonGroup}>
                  <If condition={!!wcs.what || !!wcs.cond || !!wcs.spec}>
                    <TouchableOpacity
                      style={styles.buttonClear}
                      onPress={() => deleteItem(idx)}
                    >
                      <Text style={styles.buttonText}>delete</Text>
                    </TouchableOpacity>
                  </If>
                  <If
                    condition={
                      idx === array.length - 1 && !!what && !!cond && !!spec
                    }
                  >
                    <TouchableOpacity style={styles.buttonSearch}>
                      <Text style={styles.buttonText}>search</Text>
                    </TouchableOpacity>
                  </If>
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
        {/* @ts-ignore */}
      </ScrollView>
      <FAB
        style={styles.fab}
        color={colors.buttonText}
        icon="plus"
        onPress={add}
        visible={!what || !!spec}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listFormContainer: {
    height: '92%'
  },
  card: {
    margin: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5,
    maxHeight: '100%'
  },
  selections: {
    fontSize: 16
  },
  textInput: {
    marginTop: 16,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.secondary,
    paddingLeft: 8,
    paddingRight: 8
  },
  buttonGroup: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonClear: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 48,
    backgroundColor: colors.buttonNegative,
    borderWidth: 1,
    borderColor: colors.buttonNegativeBorder,
    borderRadius: 8
  },
  buttonSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 48,
    backgroundColor: colors.accent,
    borderWidth: 1,
    borderColor: colors.accentDark,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: colors.buttonText
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.accent,
    borderWidth: 1,
    borderColor: colors.accentDark
  }
})

export default ListForm
