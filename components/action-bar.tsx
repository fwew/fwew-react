/**
 * This file is part of fwew-react.
 * fwew-react: Fwew Na'vi Dictionary app written using React Native
 * Copyright (C) 2022 Corey Scheideman <corscheid@gmail.com>
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
import { Image, SafeAreaView, StyleSheet } from 'react-native'

import { ActionBarProps } from '../lib/interfaces/props'
import { DrawerToggleButton } from '@react-navigation/drawer'
import React from 'react'
import colors from '../lib/colors'
import fwew from '../assets/fwew.png'

/**
 * ActionBar Component
 *
 * The bar at the top of the screen, below the status bar
 */
function ActionBar({ children }: ActionBarProps): JSX.Element {
  return (
    <SafeAreaView style={styles.action_bar}>
      <DrawerToggleButton tintColor={colors.actionBarIconFill} />
      <Image source={fwew} style={styles.icon} />
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  action_bar: {
    height: 56,
    width: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    marginLeft: -6,
    width: 48,
    height: 48
  }
})

export default ActionBar
