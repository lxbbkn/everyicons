import React, { useLayoutEffect, useMemo } from 'react'
import { useDebounce } from 'use-debounce'
import { IconList, Layout } from 'components'
import { useStore } from 'store'

type Props = {
  data: {
    [key: string]: string[]
  }
}

const IconsView: React.FC<Props> = ({ data }) => {
  const { pack, search, size, strokeWidth, toggleSidebar } = useStore()

  const [dSize] = useDebounce(size, 100)
  const [dStrokeWidth] = useDebounce(strokeWidth, 100)

  const [packs, icons] = useMemo(
    () => [
      Object.keys(data),
      !search
        ? data[pack]
        : data[pack].filter((item: string) => {
            return item.toLowerCase().includes(search.toLowerCase())
          }),
    ],
    [data, pack, search],
  )

  useLayoutEffect(() => {
    if (navigator?.userAgent.includes('Mobile')) {
      toggleSidebar()
    }
  }, [toggleSidebar])

  return (
    <Layout packs={packs}>
      {!!icons?.length && (
        <IconList
          pack={pack}
          icons={icons}
          size={dSize}
          strokeWidth={dStrokeWidth}
        />
      )}
    </Layout>
  )
}

export default IconsView
