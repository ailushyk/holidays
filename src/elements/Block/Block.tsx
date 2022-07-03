import React, { FC } from 'react'
import { BlockBase } from './BlockBase'
import { BlockDirection } from '../index'
import cn from 'classnames'

interface Props {
  children: React.ReactNode
  flex?: boolean
  direction?: BlockDirection
  justify?: 'center' | 'between'
  className?: string
}

export const Block: FC<Props> = ({ children, ...restProps }) => {
  const className = [
    restProps.className,
    {
      'justify-center': restProps.justify === 'center',
      'justify-between': restProps.justify === 'between',
    },
    {
      flex: restProps.flex,
    },
    {
      'flex-col': restProps.direction === 'col',
      'flex-row': restProps.direction === 'row',
    },
  ]
  return <BlockBase className={cn(className)}>{children}</BlockBase>
}
