import React from 'react'
import { Block } from './Block'
import { Text } from '../Text'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'UI/Block',
  component: Block,
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = ({ children, ...args }) => {
  return (
    <Block {...args}>
      <Text>Lorem </Text>
      <Text>ipsum </Text>
      <Text>dolor </Text>
    </Block>
  )
}

const Default = Template.bind({})

const FlexBox = Template.bind({})
FlexBox.args = {
  flex: true,
  justify: 'between',
}

export { Default, FlexBox }
