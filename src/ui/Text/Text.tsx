import React, { FC } from 'react'
import { TextBase } from './TextBase'
import cn from 'classnames'

interface Props {
  children: string
  uppercase?: boolean
}

export const Text: FC<Props> = ({ children, ...restProps }) => {
  const className = cn([
    {
      uppercase: !!restProps.uppercase,
    },
  ])
  return <TextBase className={className}>{children}</TextBase>
}
