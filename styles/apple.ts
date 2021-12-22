export enum Color {
  Main = 'main',
  Gray = 'gray',
  Gray2 = 'gray2',
  Gray3 = 'gray3',
  Gray4 = 'gray4',
  Gray5 = 'gray5',
  Gray6 = 'gray6',
  Blue = 'blue',
  Green = 'green',
  Indigo = 'indigo',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  Teal = 'teal',
  Yellow = 'yellow',
}

type Colors = {
  readonly [key in Color]: `#${string}`
}

const light: Colors = {
  main: '#1c1c1e',
  gray: '#8e8e93',
  gray2: '#aeaeb2',
  gray3: '#c7c7cc',
  gray4: '#d1d1d6',
  gray5: '#e5e5ea',
  gray6: '#f2f2f7',
  blue: '#007aff',
  green: '#34c759',
  indigo: '#5856d6',
  orange: '#ff9500',
  pink: '#ff2d55',
  purple: '#af52de',
  red: '#ff3b30',
  teal: '#5ac8fa',
  yellow: '#ffcc00',
}

const dark: Colors = {
  main: '#f2f2f7',
  gray: '#8e8e93',
  gray2: '#636366',
  gray3: '#48484a',
  gray4: '#3a3a3c',
  gray5: '#2c2c2e',
  gray6: '#1c1c1e',
  blue: '#0a84ff',
  green: '#30d158',
  indigo: '#5e5ce6',
  orange: '#ff9f0a',
  pink: '#ff375f',
  purple: '#bf5af2',
  red: '#ff453a',
  teal: '#64d2ff',
  yellow: '#ffd60a',
}

export default { light, dark }
