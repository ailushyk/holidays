import { Block, Text } from '../../elements'
import React, { FC } from 'react'

interface Props {
  children: string
}

export const Header: FC<Props> = ({ children }) => (
  <Block flex justify="center">
    <Text>{children}</Text>
  </Block>
)
