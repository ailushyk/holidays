import React, { FC } from 'react'
import { Text } from '../Text'

interface Props {
  children: React.ReactNode
  className?: string
}

export const BlockBase: FC<Props> = ({ children, ...props }) => {
  if (typeof children === 'string') {
    return (
      <div {...props}>
        <Text>{children}</Text>
      </div>
    )
  }

  return <div {...props}>{children}</div>
}
