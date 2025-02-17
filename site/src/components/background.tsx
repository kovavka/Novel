import * as React from 'react'
import './background.css'

type BackgroundProps = {
  path: string
}

export const Background = ({ path }: BackgroundProps): React.ReactElement => {
  return (
    <div className='background-sprite'>
      <img className='background' src={path} />
    </div>
  )
}
