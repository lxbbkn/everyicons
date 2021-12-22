/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react'
import { WindowScroller, AutoSizer, List } from 'react-virtualized'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

const IconCard = dynamic(() => import('../IconCard/IconCard'))

const ROW_HEIGHT = 144
const MAX_COL_WIDTH = 128

const StyledList = styled(List)`
  overflow: visible !important;
  outline: none;

  > div {
    overflow: visible !important;
  }
`

const StyledRow = styled.div<{ width: number; cols: number }>`
  display: grid;
  align-items: stretch;
  grid-template-columns: ${({ width, cols }) =>
    `repeat(${cols}, ${Math.round(width / cols)}px)`};
  justify-items: stretch;
`

export type Props = {
  pack: string
  icons: string[]
  size: number
  strokeWidth: number
}

const IconList: React.FC<Props> = ({ pack, icons = [], size, strokeWidth }) => {
  const [cols, setCols] = useState(1)

  return (
    <WindowScroller
      scrollElement={typeof window !== 'undefined' ? window : null}
    >
      {({ height, scrollTop, onChildScroll, isScrolling, registerChild }) => (
        <AutoSizer
          disableHeight
          onResize={({ width }) => {
            setCols(Math.floor(width / MAX_COL_WIDTH) || 1)
          }}
        >
          {({ width }) => (
            <div ref={registerChild}>
              <StyledList
                autoHeight
                tabIndex={-1}
                width={width}
                height={height}
                scrollTop={scrollTop}
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                style={{ overflowX: 'visible' }}
                rowCount={Math.ceil(icons.length / cols)}
                rowHeight={ROW_HEIGHT}
                rowRenderer={({ key, index: rowIndex, style }) => {
                  return (
                    <StyledRow
                      key={key}
                      style={style}
                      width={width}
                      cols={cols}
                    >
                      {Array.from({ length: cols }, (_, colIndex) => {
                        const icon = icons[rowIndex * cols + colIndex]

                        if (!icon) {
                          return null
                        }

                        return (
                          <IconCard
                            key={icon}
                            name={icon}
                            path={`${pack}/${icon}`}
                            width={size}
                            height={size}
                            strokeWidth={strokeWidth}
                          />
                        )
                      })}
                    </StyledRow>
                  )
                }}
              />
            </div>
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  )
}

export default IconList
