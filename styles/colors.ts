import {
  gray,
  // tomato,
  // red,
  // crimson,
  // pink,
  // plum,
  // purple,
  // violet,
  // indigo,
  // blue,
  // cyan,
  // teal,
  // green,
  // grass,
  // brown,
  orange,
  grayDark,
  // tomatoDark,
  // redDark,
  // crimsonDark,
  // pinkDark,
  // plumDark,
  // purpleDark,
  // violetDark,
  // indigoDark,
  // blueDark,
  // cyanDark,
  // tealDark,
  // greenDark,
  // grassDark,
  // brownDark,
  orangeDark,
} from '@radix-ui/colors'

const light = {
  ...gray,
  // ...tomato,
  // ...red,
  // ...crimson,
  // ...pink,
  // ...plum,
  // ...purple,
  // ...violet,
  // ...indigo,
  // ...blue,
  // ...cyan,
  // ...teal,
  // ...green,
  // ...grass,
  // ...brown,
  ...orange,
}

const dark = {
  ...grayDark,
  // ...tomatoDark,
  // ...redDark,
  // ...crimsonDark,
  // ...pinkDark,
  // ...plumDark,
  // ...purpleDark,
  // ...violetDark,
  // ...indigoDark,
  // ...blueDark,
  // ...cyanDark,
  // ...tealDark,
  // ...greenDark,
  // ...grassDark,
  // ...brownDark,
  ...orangeDark,
}

const all = {
  ...light,
  ...dark,
} as const

type ColorMapper<T> = {
  [key in keyof T]: string
}

export type Color = ColorMapper<keyof typeof all>

export default { light, dark }
