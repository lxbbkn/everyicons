import create, { State, UseBoundStore } from 'zustand'
import { ThemeMode } from 'styles/themes'

const { Light, Dark } = ThemeMode

interface Store extends State {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void

  sidebar: boolean
  toggleSidebar: () => void

  pack: string
  setPack: (pack: string) => void

  search: string
  setSearch: (search: string) => void

  size: number
  setSize: (size: number) => void

  strokeWidth: number
  setStrokeWidth: (strokeWidth: number) => void
}

export const useStore: UseBoundStore<Store> = create<Store>(set => ({
  theme: Dark,
  setTheme: theme => set({ theme }),
  toggleTheme: () =>
    set(({ theme }) => ({ theme: theme === Light ? Dark : Light })),

  sidebar: true,
  toggleSidebar: () => set(({ sidebar }) => ({ sidebar: !sidebar })),

  pack: 'feather',
  setPack: pack => set(() => ({ pack })),

  search: '',
  setSearch: search => set({ search }),

  size: 48,
  setSize: size => set({ size }),

  strokeWidth: 1,
  setStrokeWidth: strokeWidth => set({ strokeWidth }),
}))
