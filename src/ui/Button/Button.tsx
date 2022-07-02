import React, { FC } from 'react'
import { ButtonBase, ButtonBaseProps } from './ButtonBase'
import { ColorValue } from '../index'
import cn from 'classnames'

interface ButtonProps extends ButtonBaseProps {
  color?: ColorValue
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  color = 'white',
}) => {
  const className = cn(
    'flex justify-center items-center w-72 h-12 active:pt-1',
    'border rounded-2xl active:shadow-pressed font-semibold',
    {
      'bg-white': color === 'white',
      'bg-positive': color === 'positive',
      'bg-negative': color === 'negative',
    },
  )

  return (
    <ButtonBase className={className} onClick={onClick}>
      {children}
    </ButtonBase>
  )
}
