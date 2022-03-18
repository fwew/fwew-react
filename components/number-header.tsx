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
import React, { useState } from 'react'
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../lib/colors'
import { useDebounce } from '../lib/hooks/useDebounce'
import { FwewHeaderProps } from '../lib/interfaces/props'
import ActionBar from './action-bar'
import If from './if'

/** NumberHeader Component
 *
 * The header of the Number Screen
 */
function NumberHeader({
  searchDataFn,
  inputPlaceholderTextFn,
  text,
  toggleReverseFn,
  isReverseEnabled
}: FwewHeaderProps): JSX.Element {
  const windowWidth = Dimensions.get('window').width
  const [value, setValue] = useState(text)
  const debounce = useDebounce()

  const updateValue = (newValue: string): void => {
    setValue(newValue)
    debounce(() => searchDataFn(newValue), 300)
  }

  return (
    <View>
      {/* status bar */}
      <SafeAreaView style={styles.safeStatusBar} />
      <StatusBar barStyle="light-content" />
      <ActionBar>
        <If condition={windowWidth > 480}>
          <View style={{ flex: 0.5, marginLeft: -(52 + 48) }}></View>
        </If>
        <View style={styles.parent}>
          {/* search bar */}
          <TextInput
            onChangeText={updateValue}
            placeholder={inputPlaceholderTextFn()}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.input}
            clearButtonMode="always"
            value={value}
          />
          {/* search bar clear input button */}
          <If condition={Platform.OS !== 'ios' && !!value}>
            <TouchableOpacity
              style={styles.closeButtonParent}
              onPress={() => updateValue('')}
            >
              <MaterialIcons
                style={styles.closeButton}
                name="cancel"
                size={18}
                color={'#fff'}
              />
            </TouchableOpacity>
          </If>
        </View>
        <If condition={windowWidth > 480}>
          <View style={{ flex: 0.5, marginRight: -(46 + 8) }}></View>
        </If>
        {/* Number Search direction toggle */}
        <TouchableOpacity
          onPress={toggleReverseFn}
          style={styles.reverseButton}
        >
          <MaterialIcons
            name={isReverseEnabled ? 'swap-horizontal-circle' : 'swap-horiz'}
            size={36}
            color={colors.actionBarIconFill}
          />
        </TouchableOpacity>
      </ActionBar>
    </View>
  )
}

const styles = StyleSheet.create({
  safeStatusBar: {
    flex: 0,
    backgroundColor: colors.secondary
  },
  parent: {
    flex: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
    // marginRight: 8
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8
  },
  closeButton: {
    color: colors.inputCloseButton,
    height: 18,
    width: 18,
    marginRight: 8
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  reverseButton: {
    marginRight: 10,
    paddingLeft: 6
  }
})

export default NumberHeader
