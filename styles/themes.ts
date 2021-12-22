import colors, { Color } from './colors'

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export interface Theme {
  readonly transition: string
  readonly borderRadius: string
  readonly colors: {
    readonly [key in Color]: string
  }
}

const styles: Omit<Theme, 'colors'> = {
  transition: 'ease-out 100ms',
  borderRadius: '8px',
}

const light = { ...styles, colors: colors.light }
const dark = { ...styles, colors: colors.dark }

export default { light, dark }
