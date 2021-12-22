import React, { CSSProperties } from 'react'
import dynamic from 'next/dynamic'
import data from '../public/static/icons/index.json'

const IconsView = dynamic(() => import('../views/IconsView'), {
  ssr: false,
  loading: function fn() {
    const style: CSSProperties = {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return <div style={style}>Wait a moment</div>
  },
})

const Index: React.FC = () => {
  // const [data, setData] = React.useState({})

  // React.useEffect(() => {
  //   ;(async () => setData(await import('../public/static/icons/index.json')))()
  // }, [])

  return <IconsView data={data} />
}

export default Index
