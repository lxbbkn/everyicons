import React, { memo, SVGProps } from 'react'

export type Props = {
  path: string
} & SVGProps<SVGElement>

const Icon: React.FC<Props> = ({ path, ...props }) => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const Element = require(`../../public/static/icons/${path}.svg`).default
  return <Element {...props} />
}

export default memo(Icon)
