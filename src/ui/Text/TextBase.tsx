import React, { FC } from 'react'
import { TextType } from '../index'

export interface TextBaseProps {
  children: string
  className?: string
  as?: TextType
}

export const TextBase: FC<TextBaseProps> = ({
  children,
  as = 'span',
  ...restProps
}) => {
  return React.createElement(as, restProps, children)
}
