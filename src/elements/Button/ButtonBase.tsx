import React, { FC } from 'react'

export interface ButtonBaseProps {
  children: React.ReactNode
  className?: string
  onClick(): void
}

export const ButtonBase: FC<ButtonBaseProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}
