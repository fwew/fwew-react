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
import Constants from 'expo-constants'
import React, { Fragment } from 'react'
import { Text } from 'react-native'
import { EdgeInsets } from 'react-native-safe-area-context'
import { Keyboard } from './interfaces/keyboard'
import { ListWCS } from './interfaces/list-wcs'
import { Orientation } from './interfaces/orientation'
import { Word } from './interfaces/word'

/**
 * compress digraphs so that each phoneme is represented by exactly one unique character
 *
 * @param word Na'vi string to be compressed
 * @return word with every every digraph replaced by a unique substitute
 */
function compress(word: string): string {
  const compressed = {
    aw: '0',
    ay: '1',
    ew: '2',
    ey: '3',
    kx: '4',
    ll: '5',
    ng: '6',
    px: '7',
    rr: '8',
    ts: '9',
    tx: 'Q'
  }
  for (const c in compressed) {
    word = word.replace(c, compressed[c])
  }
  return word
}

/**
 * Compare two Fwew Word objects for sorting according to custom Na'vi Collation
 *
 * @param a Fwew Word object
 * @param b Fwew Word object
 * @return -1 if a is to be sorted before b, 1 if a is to be sorted after b, 0 otherwise
 */
export function compareWords(a: Word, b: Word): number {
  const sortOrderCompressed = "'a01äe23fhiìjk4l5mn6op7r8st9Quvwyz-".split('')
  const compressedA = compress(a.Navi.toLowerCase())
  const compressedB = compress(b.Navi.toLowerCase())
  const length =
    compressedA.length < compressedB.length
      ? compressedA.length
      : compressedB.length

  for (let i = 0; i < length; i++) {
    const indexA = sortOrderCompressed.indexOf(compressedA[i])
    const indexB = sortOrderCompressed.indexOf(compressedB[i])
    if (indexA < indexB) {
      return -1
    } else if (indexA > indexB) {
      return 1
    }
  }

  if (compressedA.length < compressedB.length) {
    return -1
  } else if (compressedA.length > compressedB.length) {
    return 1
  }
  return 0
}

/**
 * Ensures all items in an array have unique keys
 *
 * @param arr an array of JSX Elements
 * @return the given array with unique key props
 */
export function withKeys(arr: JSX.Element[]): JSX.Element[] {
  return arr.map((item, index) => <Fragment key={index}>{item}</Fragment>)
}

/**
 * joins items in an array with char in between, much like Array.prototype.join,
 * but for React Native Text
 *
 * @param arr a mixed array of strings and/or Text Elements
 * @param str the string to place between all the array items
 * @return array of Text Elements, with a Text containing `str` in between each
 */
export function join(arr: Array<string | JSX.Element>, str: string): JSX.Element[] {
  return arr.map((item, index) =>
    index > 0 ? (
      <Text>
        {str}
        {item}
      </Text>
    ) : (
      <Text>{item}</Text>
    )
  )
}

/**
 * checks for the containment of a given Word in a Set of Word by ID
 *
 * @param wordSet a Set of Fwew Word
 * @param word a Fwew Word
 * @return true if the word is in wordSet (by ID), false otherwise
 */
export function includes(wordSet: Set<Word>, word: Word): boolean {
  for (const w of wordSet) {
    if (w.ID === word.ID) {
      return true
    }
  }
  return false
}

/**
 * deletes a Word from a Set by ID
 *
 * @param wordSet a Set of Fwew Word
 * @param id the Id of the Word to delete
 */
export function deleteById(wordSet: Set<Word>, id: string): void {
  for (const w of wordSet) {
    if (w.ID === id) {
      wordSet.delete(w)
      break
    }
  }
}

/**
 * converts given camelCase formatted condition (comparison operator) to the
 * format used in Fwew List/Random
 *
 * @param cond string representing condition of numeric comparison
 * @return symbol representation of cond
 */
export function convertCond(cond: string): string {
  switch (cond) {
    case 'lessThan':
      return '<'
    case 'lessThanEqual':
      return '<='
    case 'equal':
      return '='
    case 'greaterThanEqual':
      return '>='
    case 'greaterThan':
      return '>'
    case 'notEqual':
      return '!='
    case 'notStarts':
      return 'not-starts'
    case 'notEnds':
      return 'not-ends'
    case 'notIs':
      return 'not-is'
    case 'notHas':
      return 'not-has'
    case 'notLike':
      return 'not-like'
    default:
      return cond
  }
}

/**
 * inverse of convertCond.
 * converts given format used in Fwew List/Random to the camelCase formatted condition (comparison operator)
 *
 * @param cond symbol representation of cond
 * @return string representing condition of numeric comparison
 */
function convertCondInverse(cond: string): string {
  switch (cond) {
    case '<':
      return 'lessThan'
    case '<=':
      return 'lessThanEqual'
    case '=':
      return 'equal'
    case '>=':
      return 'greaterThanEqual'
    case '>':
      return 'greaterThan'
    case '!=':
      return 'notEqual'
    case 'not-starts':
      return 'notStarts'
    case 'not-ends':
      return 'notEnds'
    case 'not-is':
      return 'notIs'
    case 'not-has':
      return 'notHas'
    case 'not-like':
      return 'notLike'
    default:
      return cond
  }
}

/**
 * calculates main content area view height
 *
 * @param orientation Orientation value of either LANDSCAPE or PORTRAIT
 * @param os string representing the current Platform OS
 * @param keyboard Keyboard object describing location and size of the software
 *        keyboard
 * @param insets EdgeInsets object describing the sizes of the safe area insets
 * @param windowHeight number representing the height of the window
 * @param actionBarHeight number representing the height of the action bar
 * @return number representing the height of the main content area with all the
 *         above accounted for
 */
export function getContentAreaHeight(
  orientation: Orientation,
  os: string,
  keyboard: Keyboard,
  insets: EdgeInsets,
  windowHeight: number,
  actionBarHeight: number
): number {
  let statusBarHeight: number
  let bottomInset: number
  let keyboardHeight: number

  if (orientation === Orientation.LANDSCAPE) {
    if (os === 'ios') {
      statusBarHeight = 0
      bottomInset = keyboard.keyboardShown ? 0 : insets.bottom
    } else {
      statusBarHeight = Constants.statusBarHeight
      bottomInset = insets.bottom
    }
  } else if (orientation === Orientation.PORTRAIT) {
    if (os === 'ios') {
      statusBarHeight = insets.top
      bottomInset = insets.bottom
    } else {
      statusBarHeight = Constants.statusBarHeight
      bottomInset = insets.bottom
    }
  }

  keyboardHeight = keyboard.keyboardShown ? keyboard.keyboardHeight : 0

  return (
    windowHeight -
    statusBarHeight -
    actionBarHeight -
    bottomInset -
    keyboardHeight
  )
}

/**
 * Splits List/Random query text into an array of ListWCS
 *
 * @param text the list/random query text
 * @return array of ListWCS objects corresponding to the `text`
 */
export function textToWCS(text: string): ListWCS[] {
  let wcsArr: ListWCS[] = []
  let splitText = text.split(' ')
  // handle Random's "n where what cond spec ..."
  if (splitText[1] === 'where') {
    splitText = splitText.slice(2)
  }
  // handle Random's "n"
  else if (text.match(/^\d+$/)) {
    splitText = []
  }
  for (let i = 0; i < splitText.length; i += 4) {
    const what = splitText[i]
    const cond = convertCondInverse(splitText[i + 1])
    const spec = splitText[i + 2]
    wcsArr.push({ what, cond, spec })
  }
  return wcsArr
}
